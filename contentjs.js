const videoLinks = [
    {
        title: "Summer Fashion Essentials",
        description: "Must-have fashion items for your summer wardrobe!",
        thumbnail: "T1.png",
        link: "https://youtu.be/kR0I1YOhAE4?feature=shared",
    },
    {
        title: "Versace Women's Spring-Summer 2018 Fashion Show",
        description: "Check out this phenomenal fashion show!",
        thumbnail: "T2.png",
        link: "https://youtu.be/vQ6_okzfNSs?feature=shared",
    },
    {
        title: "Louis Vuitton Men's Spring-Summer 2025 Fashion Show",
        description: "Check out this awesome show!",
        thumbnail: "T3.PNG",
        link: "https://www.youtube.com/live/krfcr9DtB4M?feature=shared",
    },
    {
        title: "Fashion Trends 2023",
        description: "Get ready for the latest fashion trends of 2023!",
        thumbnail: "T4.png",
        link: "https://youtu.be/MvilTBEDBfk?feature=shared",
    },
    {
        title: "Fashion Haul: Spring Collection",
        description: "Check out this latest fashion haul featuring the spring collection!",
        thumbnail: "T5.png",
        link: "https://youtu.be/vQ6_okzfNSs?feature=shared",
    },
    {
        title: "Miu Miu Spring/Summer 2024 Fashion Show",
        description: "Check out this amazing fashion show!",
        thumbnail: "T6.png",
        link: "https://www.youtube.com/live/dFbMGgBAaI4?feature=shared",
    },
    // More links can be added here
];

const videoGrid = document.getElementById("video-grid");

videoLinks.forEach((videoLink) => {
    const videoLinkHTML = `
        <div class="video-link">
            <img src="${videoLink.thumbnail}" alt="${videoLink.title}">
            <h2>${videoLink.title}</h2>
            <p>${videoLink.description}</p>
            <a href="${videoLink.link}" target="_blank">Watch Now</a>
        </div>
    `;
    videoGrid.innerHTML += videoLinkHTML;
});