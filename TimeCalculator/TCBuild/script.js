// Constant 8 hours in minutes (8 * 60 minutes)
let gifs = ["https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3M1cHJ3YTJ0NmV6cmF6eHZpdHM3dmpzMW13bm5tcjEyMnJwcnJwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R6gvnAxj2ISzJdbA63/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3NuMjNieGx2eWVzem94OHh0b2U3Y2VkZXJhdTQxeW5rczZwZGZkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/duNowzaVje6Di3hnOu/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN244YzllMmg1cXJ6dTB5aHZ2ZWRjZjNudDVqYWtjbXhydmh0cGtoZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xlGYf1RUbYYes/200.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjdjY3prd3prb2RtNjFmZWwzcGNpem45ZHJwcGpzcmgwaHNyc29mYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IrQcyTog3X8VW/200.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGFpNGFidTk4YjV1dHhzdmd1MXN2NDJjem5lNnFtODZ6bm1iM29xMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bbshzgyFQDqPHXBo4c/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjhhZ3MxZG9rdXZ0NWt5aWs0MTdjNTFxdDdnMm0zZnpmaHF5N3lociZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UO5elnTqo4vSg/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemJ2c214OWFwcjN5ZnZsZXhhMjB5YXZ5cW83aHYzcDdrdDc5N2gyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVzH2XY3Y0Ar6/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODAwYjBzemd1b2NtdHM5ZmN5d3JjOGZ1eGh1MjN4aGdtN3JsZ3h0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hryis7A55UXZNCUTNA/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWlja2dwZms5cGZpZmticW8zYThuYWQ2bXRmOTIxZTgyMzB1cGJtciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yeXb4sjQLw5QA/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTlkYnczaGRwMnJhdXluYnBjZWxjc3JldTl1OTl4MHZlbWUwd2YzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vtm4qejJIl1ERPIrbA/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDF3dnRjM3FuNXllODV4N3Fzc2FrcDdveTJ2ank2aDM0NTY5MG96cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hU0FIbvLLbKlfnimHu/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3BkOW9lcHViN3RtcmV6YjltMzdveTAyZWhqNGJsbXlibTN5NzFjYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HIqV5khg6gyqc/200.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGVkZ3gyNWw0Y3VhamJ1NmJ6ZTQzOXE5NHJzbjFrZ2J4eDhtZ3JrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ffynNaSYx2yTC/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDh1aHptd3M1eHdmcXJjNnQ0eDczNDRhNnR2eTM4ZHNtN2w0N3g3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IpKxfPy33hMRy/200.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamsyaGNvcmM4cnVzazkweDVjd3hpOWY3bGp0MjJwejFuNnFldm4wcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JnUywhEhFhQUfZu666/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ202NjR1MjIzOTd0MGd2bGpiZjhuOGJreWc3Y2R1MWdkODkxaGRoMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0NwF1dnk7GRz3pK0/giphy.webp",
    "https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif",
    "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    "https://media.giphy.com/media/3o6Zt8MgUuvSbkZYWc/giphy.gif",
    "https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHd4cTVzcG1iczExdDExbGxlZ2ZicXVwb3pwOGd1Z3J3Z2E5NDFkaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kBbLghDMVMZr4mygzc/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTI4aXpwdzR3bjJ4anE5czQ5ZmY2cXI2aXR6MHo0aWRtMHB5Nmh3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZfK4cXKJTTay1Ava29/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGw2Mjc3ejN3OHI3YzUzMml3emJ2NW41YXMwNDFhZHdtODlqdTg1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IgpiX9Kx7dGGpFCLI1/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRrdnJjOGFvNnkwaHppb25hcTcyNGQ4Y2pkN2o3djQ5Z3N2dGw2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IybQ6l8nfKjxQv6/giphy.webp", "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXN3cDN6M2hwOXVoY2g1Y3NhMDR6Yzdnb2NvdXRicTIwMnlnZXQxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FY8c5SKwiNf1EtZKGs/giphy.webp", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOThybzF1bG41NXZhNHNhczBpNHZiejV6ZTJrOTFwNGFiMjJhcWg3aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ok4HaWlYrewuY/giphy.webp", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXI0d3ludzc1dmJmYWRqcW5xcmxxaTY4eWJ2ZGoxdndiZm92ZjVyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MFsqcBSoOKPbjtmvWz/giphy.webp", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTB5aTZoZWNweGVpdWtkZTZocDkyMjE1a3lxeG5sMnM1bjBzZzg2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IM8WVKAtgXxAY/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGd4dzFpaXhtbHhoeTlhdDNsc3cwZ3luY2d1Zmo3MHN3OGN3dGd2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pbgN3RZuBNfQxxPToa/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTA4bHp3d2Vhc24xdzY1bzI4aGk2ODVqeGF2MG1qY2sxdmNtejF0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pynZagVcYxVUk/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXg4N2E2d2Fzc3g1d3I5OGtxY3FtbWl5OXNudmR1N3g3ZzBpb3JvdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKHGnB1ml0moQdjhEJ/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODh2NWkxd3l2eGxqdnN5cGV6enU5eGhxa2F2aTdrOXJ3b3N4NnVlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/89G5UvynaRfER6z1gR/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2h2ZGIzenM0M3phbm81bWxmZzR3MHJ6aHRwMGI4MW1uNnRjcDl3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DufO3dOGMxKeyIuZYA/giphy.webp", "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnViZHN3NnJ5eGdoeDB5cG8yd3BtbWYxaHdiNjM0MGNzbDV2aW1rZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1QWCzNdgM4jaxY2wA6/giphy.webp", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVqY3liOTFwaTZpNTJrend5dXNvYXFkYjdtd2JlbTJ3bWcyMzZtMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/coZaN8hzdaE4lAsNMK/giphy.webp", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZzNmNsdWpyejh2ejA3bHN6ajVqa3N5Y2tzc2thb3ltOGVmYnp4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pil3nqqkM3F6TbGzvr/giphy.webp", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW5vajNnMDA3Y2I5N3RlYWxoaGIwanY0dGcyZXl4Mzd4MXpiY2pjdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T4FZPjGFvTtgYIcKmU/giphy.gif", "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWV2MjdwNjB4a3k4NDF2N2xxdXRzYm1haGV3MHh2YjBrcGh5dmJjMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t344AWiQZUJSPj1SO0/giphy.webp", "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWp5bGFydW0xbnY0cHJjczI2N2c0c3R0YmFidHR3NWt6Mmdza3VoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oYfZ8hEsoFhKPEh6RD/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExemV2Y3E4YzU1Z3M2bW1qYmt6OWhqdTg4bXZoa2ZjMTg5bjdjNGhlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UvxVEnYTNA7vxx0RgX/giphy.webp", "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFsOTVtdnc3MnByY2xsNjR2eHYydXE3MGF1NXdocXIyaWFheWJvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h0MTqLyvgG0Ss/giphy.webp", "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JqdGEzem9naW1za2EzYXVmNmRodDAyYmcwMGIyaWNnNmJueGM0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e5EcjjJx3dCFi/giphy.webp", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2JpYzIzOTI3Ymd1bHNjaDRycTdlZGJ0OXBkNnZmbG1pc2ZvYWdpayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohfFv7JAWfOZZTtFC/giphy.webp", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmYwMjRhM2lyNG03eDE3NTB6bmhsdzNoM2hjMjNoMzc5MTVtNDdvNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2Bg4jgsiWQCvC/giphy.webp", "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExam5hM2pqNGFhaW00cWl6ZmJiMGJ6N3J5c2RqamljaHpiaTk4ZW9pYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TDvptqdkn5PbAq5yNy/giphy.webp", "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3EyN3M5YzZlMjNpZXB5ZjJ5MnJyY2lvZW5xaDI4NWU0cDN3cWM0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohfFIit2bUGQzSJby/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzR4cGw1NXl4dHhpZHQyNTkyZ3lxdTU2MnNrNG96M205OHBheXpobCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUySTH0ZFqF9KeUPcI/giphy.webp", "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanowZzgzN3lpd2JoM2JzMHFmdTZjcHFrZG1mb2w1enU4ZjV5cHd2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AGGcmjQuwPHvvpotns/giphy.webp", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnAzOHg1aWJwazlxejVhd3hsNGp3eWUyeDZ4dmRmc3lwbTJ1c2tzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZtJw0RY6WW0ik/giphy.webp", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnN6amR4ZWpmcjJva3AyMTBrZDdoOXk2aGYzOGxxamNwOTdjenVldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5T0kyezV83pqrZOMPf/giphy.webp"
];
const workHours = 8 * 60;

const apiKey = 'zhnH71CTQrwHKV4TPgu308Y9ixklUdBy'; // Replace with your actual Giphy API key
const apiURL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=epic+fail&rating=r`;

const cacheDuration = 120 * 60 * 1000; // 30 minutes in milliseconds
const dbName = 'gifCacheDB';
const storeName = 'gifs';

//gifs = []; // Array to store GIF URLs

// Open or create the IndexedDB database
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore(storeName, { keyPath: 'id' });
        };
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

// Store GIFs and timestamp in IndexedDB
function storeGIFs(gifUrls) {
    return openDB().then(db => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        const now = Date.now();

        gifUrls.forEach((url, index) => {
            store.put({ id: `gif_${index}`, url });
        });

        // Store timestamp separately
        store.put({ id: 'timestamp', url: now });

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => resolve();
            transaction.onerror = (event) => reject(event.target.error);
        });
    });
}

// Get GIFs and timestamp from IndexedDB
function getCachedGIFs() {
    return openDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();

            request.onsuccess = (event) => {
                const results = event.target.result;
                const gifs = results.filter(item => item.id.startsWith('gif_')).map(item => item.url);
                const timestampItem = results.find(item => item.id === 'timestamp');
                const timestamp = timestampItem ? timestampItem.url : null;
                resolve({ gifs, timestamp: Number(timestamp) });
            };

            request.onerror = (event) => reject(event.target.error);
        });
    });
}

// Fetch a single random GIF
async function fetchRandomGIF(apiURL) {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.data.images.fixed_height.url;
    } catch (error) {
        console.error("Error fetching GIF:", error);
    }
}

// Fetch 10 random GIFs
async function fetchTrendingGIFs() {
    try {
        const fetchPromises = [];

        // Create an array of promises to fetch 10 GIFs
        for (let i = 0; i < 3; i++) {
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=epic+fail&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=machester+united+scores&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cristiano+ronaldo&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=long+shot+goals&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=I+am+batman&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=marvel+avengers&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=scream&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=leave+me+alone&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=thug+life&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=development&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=fast+car&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=funny+dog&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=funny+cat&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=machester+united&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=harry+potter&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=red+dead+redemption+2&rating=r`));
            fetchPromises.push(fetchRandomGIF(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=video+games&rating=r`));
        }

        // Wait for all promises to resolve
        const gifUrls = await Promise.all(fetchPromises);


        gifs.push(...gifUrls);
        // Store the fetched GIFs in IndexedDB
        await storeGIFs(gifs);

        return gifs;
    } catch (error) {
        console.error("Error fetching GIFs:", error);
    }
}

function getRandomItem(index) {
    return gifs[index];
}

function getRandomPosition() {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    return { x, y };
}

function positionGifs() {
    const gifElements = document.querySelectorAll('.funny-gif');

    gifElements.forEach(gif => {
        const windowWidth = window.innerWidth - 200;
        const windowHeight = window.innerHeight - 200;

        // Calculate new positions
        let newX = Math.random() * windowWidth;
        let newY = Math.random() * windowHeight;

        // Adjust newX to ensure the gif doesn't overflow horizontally
        if (newX + gif.width > windowWidth) {
            newX = windowWidth - gif.width;
        }

        // Adjust newY to ensure the gif doesn't overflow vertically
        if (newY + gif.height > windowHeight) {
            newY = windowHeight - gif.height;
        }

        gif.style.left = `${newX}px`;
        gif.style.top = `${newY}px`;
    });
}

function addRandomGif(index) {
    const gifUrl = getRandomItem(index);
    const position = getRandomPosition();
    const img = document.createElement('img');
    img.src = gifUrl;
    img.className = 'funny-gif';
    img.style.left = `${position.x}px`;
    img.style.top = `${position.y}px`;
    img.addEventListener('click', handleGifClick); // Add click event to trigger fullscreen

    document.body.appendChild(img);
}

// Fullscreen logic
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fullscreenGif = document.getElementById('fullscreen-gif');

function handleGifClick(event) {
    const gifSrc = event.target.src;
    fullscreenGif.src = gifSrc;
    fullscreenOverlay.classList.add('active');
}

fullscreenOverlay.addEventListener('click', (event) => {
    // Close fullscreen when clicking outside the GIF
    if (event.target === fullscreenOverlay) {
        fullscreenOverlay.classList.remove('active');
    }
});

document.addEventListener('keydown', (event) => {
    // Close fullscreen when pressing escape
    if (event.key === 'Escape') {
        fullscreenOverlay.classList.remove('active');
    }
});

// Main function to manage GIFs
async function manageGIFs() {
    try {
        const { gifs: cachedGifs, timestamp } = await getCachedGIFs();
        const now = Date.now();

        if (cachedGifs.length === 0 || (now - timestamp) > cacheDuration) {
            // Cache is empty or outdated; fetch new GIFs
            gifs = await fetchTrendingGIFs();
        } else {
            // Use cached GIFs
            gifs = cachedGifs;
        }

        // Display GIFs on the page
        positionGifs();
        gifs.forEach((_, index) => addRandomGif(index));
    } catch (error) {
        console.error("Error managing GIFs:", error);
    }
}

// Call manageGIFs to handle GIFs on page load
manageGIFs();

function saveData() {
    var mainHours = parseInt(document.getElementById('main-hours').value);
    var mainMinutes = document.getElementById('main-minutes').value;
    const teaBreak = document.getElementById('tea-break').value;
    const lunchBreak = document.getElementById('lunch-break').value;

    while (mainMinutes >= 60) {
        mainHours += 1;
        mainMinutes -= 60;
    }

    localStorage.setItem('mainHours', mainHours);
    localStorage.setItem('mainMinutes', mainMinutes);
    localStorage.setItem('teaBreak', teaBreak);
    localStorage.setItem('lunchBreak', lunchBreak);

    var currentdate = new Date();
    localStorage.setItem('currentHour', currentdate.getHours());
    localStorage.setItem('currentMinutes', currentdate.getMinutes());
}

function loadData() {
    let date = new Date();
    date.setHours(date.getHours() - parseInt(localStorage.getItem('currentHour') || date.getHours()));
    date.setMinutes(date.getMinutes() - parseInt(localStorage.getItem('currentMinutes') || date.getMinutes()));

    const mainHours = parseInt(localStorage.getItem('mainHours') || '0'); // + date.getHours();
    const mainMinutes = parseInt(localStorage.getItem('mainMinutes') || '0'); // + date.getMinutes();
    const teaBreak = localStorage.getItem('teaBreak') || '20';
    const lunchBreak = localStorage.getItem('lunchBreak') || '30';

    document.getElementById('main-hours').value = mainHours;
    document.getElementById('main-minutes').value = mainMinutes;
    document.getElementById('tea-break').value = teaBreak;
    document.getElementById('lunch-break').value = lunchBreak;
}

let prevRemainingHours = 0;
let prevRemainingMinutes = 0;

function calculateTime() {
    const hours = parseInt(document.getElementById('main-hours').value) || 0;
    const minutes = parseInt(document.getElementById('main-minutes').value) || 0;
    const teaBreak = parseInt(document.getElementById('tea-break').value) || 0;
    const lunchBreak = parseInt(document.getElementById('lunch-break').value) || 0;

    const mainMTotalinutes = hours * 60 + minutes;
    const totalMinutes = 8 * 60;
    const totalBreakMinutes = teaBreak + lunchBreak;
    const remainingMinutes = (totalMinutes + totalBreakMinutes) - mainMTotalinutes;

    const remainingHours = Math.floor(remainingMinutes / 60);
    const remainingMinutesMod = remainingMinutes % 60;

    document.getElementById('current-time').innerText = new Date().toLocaleTimeString();
    document.getElementById('remaining-time').innerText = `${remainingHours} hours and ${remainingMinutesMod} minutes`;

    if (remainingHours < prevRemainingHours || (remainingHours === prevRemainingHours && remainingMinutesMod < prevRemainingMinutes)) {
        checkHourPassed(remainingHours, remainingMinutesMod);
    }

    if (remainingHours === 0 && remainingMinutesMod === 0) {
        document.getElementById('exit-time').innerText = "Let's Go Home!";
    } else {
        const currentDate = new Date();
        const exitDate = new Date(currentDate.getTime() + remainingMinutes * 60 * 1000);
        document.getElementById('exit-time').innerText = exitDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    prevRemainingHours = remainingHours;
    prevRemainingMinutes = remainingMinutesMod;

    loadData();
    saveData();
}

function calculateTimeBasedOnEntryTIme() {

    const hours = parseInt(document.getElementById('main-hours').value) || 0;
    const minutes = parseInt(document.getElementById('main-minutes').value) || 0;
    const teaBreak = parseInt(document.getElementById('tea-break').value) || 0;
    const lunchBreak = parseInt(document.getElementById('lunch-break').value) || 0;

    // Convert all times to minutes
    let mainTimeMinutes = hours * 60 + minutes; //timeToMinutes(mainTime);


    // Calculate the exit time in minutes
    let totalTimeMinutes = mainTimeMinutes + teaBreak + lunchBreak + workHours;

    // Convert the total minutes back to HH:MM format for Exit Time
    let exitTime = minutesToTime(totalTimeMinutes);

    // Get the current time and calculate the remaining time in seconds
    let currentDate = new Date();
    let currentTimeInSeconds = currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds();
    let totalExitTimeInSeconds = totalTimeMinutes * 60;

    // Calculate remaining time
    let remainingTimeInSeconds = totalExitTimeInSeconds - currentTimeInSeconds;

    // If remaining time is negative, set to zero
    if (remainingTimeInSeconds < 0) remainingTimeInSeconds = 0;

    // Convert remaining time back to HH:MM:SS format
    // Convert remaining time back to hours, minutes, and seconds
    let remainingTimeValues = secondsToHHMMSS(remainingTimeInSeconds);

    document.getElementById('current-time').innerText = new Date().toLocaleTimeString();
    document.getElementById('remaining-time').innerText = `${remainingTimeValues[0]} hours and ${remainingTimeValues[1]} minutes and ${remainingTimeValues[2]} seconds`;

    if (remainingTimeInSeconds / 3600 === 0 && remainingTimeInSeconds / 60 === 0) {
        document.getElementById('exit-time').innerText = "Let's Go Home!";
    } else {
        document.getElementById('exit-time').innerText = exitTime;
    }

    loadData();
    saveData();
}

function showNotification(message) {
    if (!("Notification" in window)) {
        alert("This browser does not support notifications.");
    } else if (Notification.permission === "granted") {
        var notification = new Notification(message);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function(permission) {
            if (permission === "granted") {
                var notification = new Notification(message);
            }
        });
    }
}

function checkHourPassed(remainingHours, remainingMinutes) {
    if (remainingMinutes === 0) {
        showNotification(`${remainingHours} hours left!`);
    }
}

// Function to convert HH:MM to total minutes
function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

// Convert minutes back to HH:MM format
function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}
// Convert seconds back to HH:MM:SS format
function secondsToHHMMSS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    let remainingTimeValues = [hours, mins, secs];
    return remainingTimeValues;
}


calculateTimeBasedOnEntryTIme();
//calculateTime();
setInterval(calculateTimeBasedOnEntryTIme, 1000);