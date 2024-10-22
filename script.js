function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';

    if (Math.random() > 0.625) { // 37.5% 的概率围绕图片
        heart.classList.add('heart-surround');
        const imageRect = document.querySelector('.title-image').getBoundingClientRect();
        const centerX = imageRect.left + imageRect.width / 2;
        const centerY = imageRect.top + imageRect.height / 2;
        const radius = Math.max(imageRect.width, imageRect.height) / 2 + 20;

        const angle = Math.random() * Math.PI * 2;
        const startX = centerX + Math.cos(angle) * radius;
        const startY = centerY + Math.sin(angle) * radius;
        const endAngle = angle + Math.PI / 4 + Math.random() * Math.PI / 2;
        const endX = centerX + Math.cos(endAngle) * radius;
        const endY = centerY + Math.sin(endAngle) * radius;

        heart.style.setProperty('--start-x', `${startX - centerX}px`);
        heart.style.setProperty('--start-y', `${startY - centerY}px`);
        heart.style.setProperty('--end-x', `${endX - centerX}px`);
        heart.style.setProperty('--end-y', `${endY - centerY}px`);

        heart.style.left = `${centerX}px`;
        heart.style.top = `${centerY}px`;

        document.body.appendChild(heart);
    } else {
        heart.classList.add('heart-up');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-20px';
        document.body.appendChild(heart);
    }

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function createFloatingHeart() {
    const existingHearts = document.querySelectorAll('.heart-floating');
    if (existingHearts.length >= 5) return; // 将最大心心数量从10减少到5

    const heart = document.createElement('div');
    heart.classList.add('heart', 'heart-floating');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-20px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// 确保这两行代码在文件的最外层，不在任何函数内部
setInterval(createHeart, 50); // 每50毫秒创建一个心形
setInterval(createFloatingHeart, 900); // 每900毫秒创建一个向上飘动的心形

// 配置 xf-MusicPlayer
document.addEventListener('DOMContentLoaded', function() {
    new XfMusicPlayer({
        // 音乐列表
        musicList: [
            {
                title: '情人',
                singer: '许嵩',
                cover: 'https://p2.music.126.net/LnWlHw8rLnGZenoZZiYTXw==/109951165793869641.jpg',
                src: 'https://music.163.com/song/media/outer/url?id=1901371647.mp3'
            },
            {
                title: '给你一瓶魔法药水',
                singer: '告五人',
                cover: 'https://p1.music.126.net/3-mtFJRMrGMkHeNB9F1YWA==/109951165666746664.jpg',
                src: 'https://music.163.com/song/media/outer/url?id=1824045033.mp3'
            },
            {
                title: '我好想你',
                singer: '苏打绿',
                cover: 'https://p2.music.126.net/vVuO9uu8GKDXS6zKMYXX7A==/109951165791860501.jpg',
                src: 'https://music.163.com/song/media/outer/url?id=1500569811.mp3'
            },
            {
                title: '句号',
                singer: '邓紫棋',
                cover: 'https://p2.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg',
                src: 'https://music.163.com/song/media/outer/url?id=1359356908.mp3'
            },
            {
                title: '我们很好',
                singer: '薛之谦',
                cover: 'https://p2.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg',
                src: 'https://music.163.com/song/media/outer/url?id=1336856777.mp3'
            }
        ],
        // 自动播放
        autoPlay: false,
        // 默认音量
        defaultVolume: 50,
        // 播放模式 (loop: 循环播放, random: 随机播放, order: 顺序播放)
        playMode: 'random' // 改为随机播放以匹配HTML中的data-random="true"
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
