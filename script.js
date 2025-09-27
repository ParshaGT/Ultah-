document.addEventListener('DOMContentLoaded', () => {
    // Konten untuk halaman kedua (kartu ucapan)
    const cardPageContent = `
    <div class="container card-page">
        <h2>Selamat Ulang Tahun, Zhahira!</h2>
        <p>Di hari yang spesial ini, semoga kamu selalu diberkahi kebahagiaan dan kesehatan. Semoga setiap langkahmu dipenuhi dengan kesuksesan dan tawa.</p>
        <p>Teruslah bersinar dan menginspirasi!</p>
        <button class="next-page-btn">Lihat Kejutan Berikutnya</button>
    </div>
    `;

    // Konten untuk halaman ketiga (video)
    const videoPageContent = `
    <div class="container video-page">
        <h2>Ini Video Lucu Yang Aku Punya</h2>
        <p>Kumpulan video ini aku buat khusus untuk membuat harimu lebih ceria dan penuh tawa.</p>
        <div class="video-container">
            <video controls>
                <source src="Nama_Video_1.mp4" type="video/mp4">
                Browser Anda tidak mendukung tag video.
            </video>
        </div>
        <div class="video-container">
            <video controls>
                <source src="Nama_Video_2.mp4" type="video/mp4">
                Browser Anda tidak mendukung tag video.
            </video>
        </div>
        <div class="video-container">
            <video controls>
                <source src="Nama_Video_3.mp4" type="video/mp4">
                Browser Anda tidak mendukung tag video.
            </video>
        </div>
        <button id="finishBtn">Selesai</button>
    </div>
    `;

    // Array dari konten halaman
    const pages = [cardPageContent, videoPageContent];
    const body = document.body;
    let currentPageIndex = 0;

    const firstPage = document.getElementById('page1');
    const firstPageBtn = document.getElementById('nextBtn');

    setTimeout(() => {
        if (firstPage) {
            firstPage.classList.add('active');
        }
    }, 500);

    if (firstPageBtn) {
        firstPageBtn.addEventListener('click', () => {
            if (firstPage) {
                firstPage.classList.remove('active');
            }
            setTimeout(() => {
                showPage(currentPageIndex);
            }, 800);
        });
    }

    function showPage(index) {
        if (index < pages.length) {
            body.innerHTML = pages[index];
            const newPage = document.querySelector('.container');
            setTimeout(() => {
                newPage.classList.add('active');
                if (index === 1) {
                    setupFinishButton();
                } else {
                    setupNextButton();
                }
            }, 100);
            currentPageIndex++;
        }
    }
    
    function setupNextButton() {
        const nextPageBtn = document.querySelector('.next-page-btn');
        if (nextPageBtn) {
            nextPageBtn.addEventListener('click', () => {
                const currentPage = document.querySelector('.container');
                currentPage.classList.remove('active');
                setTimeout(() => {
                    showPage(currentPageIndex);
                }, 800);
            });
        }
    }

    function setupFinishButton() {
        const finishBtn = document.getElementById('finishBtn');
        if (finishBtn) {
            finishBtn.addEventListener('click', () => {
                const whatsappLink = `https://wa.me/6281284917107?text=Hai%20Sapaa,%20Aku%20sudah%20melihat%20website%20kamuu sayanggg!`;
                window.open(whatsappLink, '_blank');
            });
        }
    }
});
