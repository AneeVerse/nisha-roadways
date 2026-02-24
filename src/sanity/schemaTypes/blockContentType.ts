import { defineType, defineArrayMember, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'
import { MarkdownTableInput } from '../components/MarkdownTableInput'

export const blockContentType = defineType({
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [{ title: 'Bullet', value: 'bullet' }],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: 'image',
            icon: ImageIcon,
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        // Markdown Table block - stores as markdown string (Paste Supported)
        defineArrayMember({
            type: 'object',
            name: 'markdownTable',
            title: 'Table (Paste Supported)',
            icon: () => '📊',
            fields: [
                defineField({
                    name: 'tableContent',
                    title: 'Table Content',
                    type: 'markdown',
                    components: {
                        input: MarkdownTableInput,
                    },
                }),
            ],
            preview: {
                select: {
                    content: 'tableContent',
                },
                prepare({ content }) {
                    // Count rows from markdown
                    const lines = (content || '').split('\n').filter((l: string) => l.trim() && !l.includes('---'));
                    const rowCount = lines.length;
                    return {
                        title: `Table (${rowCount} rows)`,
                        subtitle: lines[0]?.substring(0, 50) || 'Empty table',
                    };
                },
            },
        }),
    ],
})
