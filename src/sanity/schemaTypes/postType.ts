import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta description',
            type: 'text',
            rows: 3,
            description: 'SEO description for this post (keep under 160 characters).',
            validation: (Rule) => Rule.max(160).warning('Keep under ~155–160 characters for best SEO.'),
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: { type: 'author' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                })
            ]
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            type: 'text',
            rows: 4,
            description: 'Brief summary of the post (used in blog listings).',
        }),
        defineField({
            name: 'body',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'categories',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: { type: 'category' },
                }),
            ],
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'question',
                            type: 'string',
                            title: 'Question',
                        }),
                        defineField({
                            name: 'answer',
                            type: 'text',
                            title: 'Answer',
                        }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
