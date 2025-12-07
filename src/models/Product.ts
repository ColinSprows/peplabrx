import mongoose, { Schema, models } from 'mongoose'

export interface IProduct {
  _id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  category: 'peptides' | 'sarms' | 'blends' | 'diluents' | 'liquids'
  sku: string
  dosage: string
  purity: string
  inStock: boolean
  stockQuantity: number
  image: string
  images: string[]
  featured: boolean
  bestSeller: boolean
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  category: { 
    type: String, 
    required: true,
    enum: ['peptides', 'sarms', 'blends', 'diluents', 'liquids']
  },
  sku: { type: String, required: true, unique: true },
  dosage: { type: String, required: true },
  purity: { type: String, default: '99%+' },
  inStock: { type: Boolean, default: true },
  stockQuantity: { type: Number, default: 100 },
  image: { type: String, required: true },
  images: [{ type: String }],
  featured: { type: Boolean, default: false },
  bestSeller: { type: Boolean, default: false },
  tags: [{ type: String }],
}, { timestamps: true })

const Product = models.Product || mongoose.model<IProduct>('Product', ProductSchema)

export default Product

