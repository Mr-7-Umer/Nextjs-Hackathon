import { defineType, defineField } from "sanity";

const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "id",
      type: "number",
      title: "ID",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Text",
          type: "string",
        }),
        defineField({
          name: "color",
          title: "Color",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      description: "The number of products available in stock.",
      validation: (Rule) => Rule.required().min(0).integer(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Tags associated with the product, e.g., sofa, lamp, chair.",
    }),
  ],
});

export default productSchema;
