<template>
   <div class="article-item__info">
        <div v-if="isShowAvatar" class="article-item__author-image">
        <nuxt-link aria-label="John Doe" v-bind:to="customUser">
            <img v-bind:src="customAvatarAuthor" v-bind:alt="author_name">
        </nuxt-link>
        </div>
        <div class="article-item__info-right">
        <div v-if="isShowAdmin" class="article-item__author-name">
            <nuxt-link v-bind:to="customUser"><strong>{{author_name}}</strong></nuxt-link>
        </div>
        <div class="article-item__datetime">
            <div class="date">{{dateTime.format}}</div>
            <div class="time">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                class="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                </path>
            </svg>
            {{dateTime.relative}}</div>
        </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeVi from 'dayjs/locale/vi';
dayjs.locale(localeVi);

dayjs.extend(relativeTime)
export default {
    props: {
        isShowAvatar: {
            type: Boolean,
            default: true
        },
        isShowAdmin:{
            type:Boolean,
            default:true
        },
        day:{
            type:String,
            default: ''
        },
        author_avatar:{
            type:String,
            default: ''
        },
        author_name:{
            type:String,
            default: ''
        }
    },
    computed: {
            dateTime(){
                let day = this.day;
                let dayFormat = dayjs(day); 
                return {
                    format:dayFormat.format('DD/MM/YYYY'),
                    relative:dayFormat.fromNow()
                }
            },
            customAvatarAuthor(){
                if(this.author_avatar){
                    return this.author_avatar
                }else {
                    return '../../static/assets/images/john-doe.png'
                }
            },
            customUser(){
                return '/user/'+ this.author_name
            }
    },
}
</script>

<style>

</style>