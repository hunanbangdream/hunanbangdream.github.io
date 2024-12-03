// 首页头图加载优化
/**
 * @description 实现medium的渐进加载背景的效果
 */
class ProgressiveLoad {
    constructor(smallSrc, largeSrc) {
        this.smallSrc = smallSrc;
        this.largeSrc = largeSrc;
        this.initTpl();
    }

    /**
     * @description 生成ui模板
     */
    initTpl() {
        this.container = document.createElement('div');
        this.smallStage = document.createElement('div');
        this.largeStage = document.createElement('div');
        this.smallImg = new Image();
        this.largeImg = new Image();
        this.container.className = 'pl-container';
        this.smallStage.className = 'pl-img pl-blur';
        this.largeStage.className = 'pl-img';
        this.container.appendChild(this.smallStage);
        this.container.appendChild(this.largeStage);
        this.smallImg.onload = this._onSmallLoaded.bind(this);
        this.largeImg.onload = this._onLargeLoaded.bind(this);
    }

    /**
     * @description 加载背景
     */
    progressiveLoad() {
        this.smallImg.src = this.smallSrc;
        this.largeImg.src = this.largeSrc;
    }

    /**
     * @description 大图加载完成
     */
    _onLargeLoaded() {
        this.largeStage.classList.add('pl-visible');
        this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
    }

    /**
     * @description 小图加载完成
     */
    _onSmallLoaded() {
        this.smallStage.classList.add('pl-visible');
        this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
    }
}

const executeLoad = (config, target) => {
    console.log('执行渐进背景替换');
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const loader = new ProgressiveLoad(
        isMobile ? config.mobileSmallSrc : config.smallSrc,
        isMobile ? config.mobileLargeSrc : config.largeSrc
    );
    // 和背景图颜色保持一致，防止高斯模糊后差异较大
    if (target.children[0]) {
        target.insertBefore(loader.container, target.children[0]);
    }
    loader.progressiveLoad();
};

const config = {
    smallSrc: 'https://ooo.0x0.ooo/2024/12/03/OLF1WI.jpg', // 小图链接 尽可能配置小于100k的图片
    largeSrc: 'https://ooo.0x0.ooo/2024/12/03/OLF7gD.jpg', // 大图链接 最终显示的图片
    mobileSmallSrc: 'https://ooo.0x0.ooo/2024/12/03/OLF1WI.jpg', // 手机端小图链接 尽可能配置小于100k的图片
    mobileLargeSrc: 'https://ooo.0x0.ooo/2024/12/03/OLF7gD.jpg', // 手机端大图链接 最终显示的图片
    enableRoutes: ['/'],
};

function initProgressiveLoad(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
        executeLoad(config, target);
    }
}

function onPJAXComplete(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
        initProgressiveLoad(config);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    initProgressiveLoad(config);
});

document.addEventListener("pjax:complete", function() {
    onPJAXComplete(config);
});