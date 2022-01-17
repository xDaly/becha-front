import { Image } from "./";
export interface Announce {
    id: String,
    phone: Number,
    name: String,
    title: String,
    images: Image[],
    description: String,
    address: String,
    location: String,
    price: Number,
    category: String,
    sub_category: String,
    whatsapp: Boolean,
    createdAt: Date,
    views: Number,
}