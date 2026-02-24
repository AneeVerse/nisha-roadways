function doPost(e) {
  try {
    // IMPORTANT: Replace with your actual Google Sheet ID
    const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Update this with your Sheet ID!
    
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get current timestamp in IST
    const getIndianTime = () => {
      const now = new Date();
      const utcTime = now.getTime();
      const istOffset = 5.5 * 60 * 60 * 1000; // IST offset
      const istTime = new Date(utcTime + istOffset);
      
      const year = istTime.getUTCFullYear();
      const month = String(istTime.getUTCMonth() + 1).padStart(2, '0');
      const day = String(istTime.getUTCDate()).padStart(2, '0');
      let hours = istTime.getUTCHours();
      const minutes = String(istTime.getUTCMinutes()).padStart(2, '0');
      const seconds = String(istTime.getUTCSeconds()).padStart(2, '0');
      
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const displayHours = String(hours).padStart(2, '0');
      
      return `${day}/${month}/${year}, ${displayHours}:${minutes}:${seconds} ${ampm} (IST)`;
    };
    
    // Prepare row data matching your VCard form structure
    const rowData = [
      getIndianTime(),                           // A: Timestamp
      data.name || '',                           // B: Name
      data.companyName || '',                    // C: Company Name
      data.email || '',                          // D: Email
      data.businessType || '',                   // E: Business Type
      data.source || 'VCard Contact Form',      // F: Source
      'New Lead'                                 // G: Status
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'VCard contact data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error saving VCard data: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Nisha Roadways VCard Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up sheet headers (run this once manually)
function setupVCardSheetHeaders() {
  const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Update this with your Sheet ID!
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  
  const headers = [
    'Timestamp',      // A
    'Name',           // B
    'Company Name',   // C
    'Email',          // D
    'Business Type',  // E
    'Source',         // F
    'Status'          // G
  ];
  
  // Clear existing headers and add new ones
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground('#667eea')
    .setFontColor('#ffffff')
    .setFontWeight('bold');
    
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
}