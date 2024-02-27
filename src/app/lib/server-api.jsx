export async function getCategories() {
    const res = await fetch(`${process.env.BASE_API_URL}category`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error(`API request failed with status: ${res.status}`);
    }
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
  
export async function getVendors(props) {
    
    let url = `${process.env.BASE_API_URL}vendor-advertisement?limit=5&offset=0`;
    console.log('url hai',url)
    if (props && props.latitude !== undefined && props.longitude !== undefined) {
        url += `&latitude=${props.latitude}&longitude=${props.longitude}`;
    } else {
        url += `&latitude=0&longitude=0`;
    }

    try {
        const res = await fetch(url, {
            cache: 'no-cache'
        });
    
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
    
        const vendorRes = await res.json();
        return vendorRes;
    } catch (error) {
        console.error('Error:', error);
        throw error; 
    }
}


export  async function getPages(slug) {
    const res = await fetch(`${process.env.BASE_API_URL}page/${slug}`, { cache: 'no-cache' })
    const pageRes = await res.json()
    return pageRes
}
export async function getPostMeta() {
    const res = await fetch(`${process.env.BASE_API_URL}post-meta`, { cache: 'force-cache' })
    const pageMetaRes = await res.json()
    return pageMetaRes
}

export async function getSiteSetting() {
    const res = await fetch(`${process.env.BASE_API_URL}site_setting`, { cache: 'force-cache' })
    const siteSettingRes = await res.json()
    return siteSettingRes
}

export  async function getMagazineData(slug) {
    const res = await fetch(`${process.env.BASE_API_URL}magazine/${slug}`, { cache: 'force-cache' })
    const magazineDataRes = await res.json()
    return magazineDataRes
}

export  async function getMagazineAllData() {
    const res = await fetch(`${process.env.BASE_API_URL}magazine`, { cache: 'force-cache' })
    const magazineAllDataRes = await res.json()
    return magazineAllDataRes
}