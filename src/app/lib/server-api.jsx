export async function getCategories() {
    const res = await fetch(`${process.env.BASE_API_URL}category`, { cache: 'force-cache' })
    const vendorRes = await res.json()
    return vendorRes
}
export async function getMagazines() {
    const res = await fetch(`${process.env.BASE_API_URL}magazine`, { cache: 'force-cache' })
    const vendorRes = await res.json()
    return vendorRes
}

export async function getBlogs() {
    const res = await fetch(`${process.env.BASE_API_URL}blog-home?limit=3&offset=0`, { cache: 'force-cache' })
    const blogRes = await res.json()
    return blogRes
}
  
export  async function getVendors() {
    const res = await fetch(`${process.env.BASE_API_URL}vendor-advertisement?limit=5&offset=0`, { cache: 'force-cache' })
    const vendorRes = await res.json()
    return vendorRes
}

export  async function getPages(slug) {
    const res = await fetch(`${process.env.BASE_API_URL}page/${slug}`, { cache: 'force-cache' })
    const pageRes = await res.json()
    return pageRes
}