const blogCategories = {
    "awareness": ["blogs/a1.md", "blogs/a2.md", "blogs/a3.md"],
    "research": ["blogs/r1.md", "blogs/r2.md", "blogs/r3.md"],
    "personal-stories": ["blogs/ps1.md", "blogs/ps2.md", "blogs/ps3.md"]
};

async function loadBlogs() {
    Object.keys(blogCategories).forEach(category => {
        const container = document.getElementById(category);
        
        if (!container) {
            console.error(`Container not found for ${category}`);
            return;
        }
        
        const cards = container.querySelectorAll(".blog-card");

        if (cards.length !== blogCategories[category].length) {
            console.error(`Mismatch: Found ${cards.length} cards but expected ${blogCategories[category].length} for ${category}`);
            return;
        }

        blogCategories[category].forEach((file, index) => {
            const card = cards[index];
            const title = file.split("/").pop().replace(".md", "").replace("-", " ").trim();

            card.querySelector("h3").textContent = title;
            card.querySelector("a").href = `blog.html?file=${file}`;
        });
    });
}

document.addEventListener("DOMContentLoaded", loadBlogs);