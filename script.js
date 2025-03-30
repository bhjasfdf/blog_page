const blogCategories = {
    "awareness": ["blogs/a1.md", "blogs/a2.md", "blogs/a3.md"],
    "research": ["blogs/r1.md", "blogs/r2.md", "blogs/r3.md"],
    "personal-stories": ["blogs/ps1.md", "blogs/ps2.md", "blogs/ps3.md"]
};

// Blog Titles Mapping
const blogTitles = {
    "a1": "Breast Cancer: Understanding, Symptoms, Prevention, and Treatment",
    "a2": "Why is Breast Cancer Awareness so Important?",
    "a3": "Setting Healthy Boundaries for Breast Cancer Patients",
    "r1": "BCRF-Supported Study Reports New Discoveries on Breast Cancer’s Origins",
    "r2": "Ground-breaking Discovery into the Genetic Causes of Breast Cancer",
    "r3": "18 Trailblazing Women Researchers Who Changed Breast Cancer Forever",
    "ps1": "The Overlooked Side of Breast Cancer: Mental Health",
    "ps2": "The Power of Genetic Testing: Danielle’s Family’s Story",
    "ps3": "I Didn’t Have Cancer, But I Still Carry the Scars: A BRCA Previvor’s Story"
};

async function loadBlogs() {
    Object.keys(blogCategories).forEach(category => {
        let container = document.getElementById(category);
        
        if (!container) {
            console.error("Container not found for", category);
            return;
        }

        // Get all existing blog cards in that category
        let cards = container.querySelectorAll(".blog-card");

        // Check if the number of cards matches the number of blogs
        if (cards.length !== blogCategories[category].length) {
            console.error(`Mismatch: Found ${cards.length} cards but expected ${blogCategories[category].length}`);
            return;
        }

        // Update each card instead of creating new ones
        blogCategories[category].forEach((file, index) => {
            let card = cards[index];
            let fileName = file.split("/").pop().replace(".md", ""); // Extract filename without extension

            // Set correct title from blogTitles mapping
            if (blogTitles[fileName]) {
                card.querySelector("h3").textContent = blogTitles[fileName];
            } else {
                console.warn(`Title not found for ${fileName}`);
            }

            // Update blog link
            card.querySelector("a").href = `blog.html?file=${file}`;
        });
    });
}

document.addEventListener("DOMContentLoaded", loadBlogs);
