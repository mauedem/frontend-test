<template>
    <div class="block3">
        <div class="file-loading">
            <form method="post">
                <input
                    type="file"
                    @change="getFile($event)"
                >
                <div
                    ref="holder"
                    class="file-loading__dnd"
                >
                    Grad & drop here
                </div>
            </form>

            <div class="file-loading__image">
                <img
                    :src="imgSrc"
                    :style="getImgStyle"
                    alt=""
                >
            </div>
        </div>

        <div class="file-loading__info">
            <div class="title">Имя: {{ imgName }}</div>
            <div class="title">Тип mime: {{ imgType }}</div>
            <div class="title">Размер: {{ getImgSize }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Block3",

    data: () => ({
        file: null,

        imgSrc: '',
        imgName: '',
        imgType: '',
        imgSize: '',

        imgWidth: 0,
        imgHeight: 0
    }),

    computed: {
        /* Эта свойство не отрабатывает потому что событие img.onload вызывается уже после того,
         как изображение загрузилось, но я не знаю, как это сейчас пофиксить */
        getImgStyle() {
            const style = {}

            if (this.imgWidth > 0) {
                style.width = this.imgWidth
            }

            if (this.imgHeight) {
                style.height = this.imgHeight
            }

            if (!this.imgWidth && !this.imgHeight) {
                style.width = '320px'
                style.height = '240px'
            }

            return style
        },

        getImgSize() {
            if (this.imgSize < 1024) {
                return `${this.imgSize} байт`
            }

            if (this.imgSize < 1048576) {
                const size = this.imgSize / 1024
                const roundedString = size.toFixed(2);
                return `${roundedString} килобайт`
            }

            const size = this.imgSize / (1024 * 1024)
            const roundedString = size.toFixed(1);
            return `${roundedString} мегабайт`
        }
    },

    mounted() {
        const holder = this.$refs.holder
        holder.ondragover = function () {
            return false;
        };
        holder.ondragend = function () {
            return false;
        };
        holder.ondrop = (e) => {
            e.preventDefault();
            this.handleFile(e.dataTransfer.files);
        }
    },

    methods: {
        async handleFile(files) {
            this.imgName = files[0].name
            this.imgSize = files[0].size
            this.imgType = files[0].type

            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function () {
                let img = new Image();
                img.onload = () => {
                    this.imgWidth = img.width
                    this.imgHeight = img.height
                }
            }

            this.file = files[0]
            this.imgSrc = URL.createObjectURL(this.file);
        },

        getFile(event) {
            const files = event.target.files || event.dataTransfer.files;

            if (!files.length) {
                return;
            }

            this.file = files[0]
            this.imgName = files[0].name
            this.imgSize = files[0].size
            this.imgType = files[0].type
            this.imgSrc = URL.createObjectURL(this.file);
        }

    }
}
</script>

<style scoped>
.block3 {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.file-loading {
    width: 400px;
    margin: 30px 50px;
}

.file-loading__image {
    margin-top: 30px;
}

.file-loading__dnd {
    width: 376px;
    height: 100px;
    border: 10px dashed #ccc
}

.file-loading__info {
    margin: 30px 50px;
}
</style>
