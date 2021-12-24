import { createStore } from 'vuex'
import { getLyric } from '@/api/home/homeApi.js'

export default createStore({
    state: {
        playList: [{
            al: {
                id: 1894628567,
                name: "需",
                pic: 109951165240310990,
                picUrl: "http://p4.music.126.net/WJ2cRLOKyktJSvMz70mk6g==/109951165240310992.jpg",
                pic_str: "109951165240310992"
            },
            id: 1894628567,
        }],
        playListCurrentIdx: 0,
        loading: false,
        lyric: '',
        currentTime:0
    },
    actions: {
        async getLyric(content, params) {
            let res = await getLyric({ id: params.id });
            console.log(res, '歌词')
            content.commit('setLyric', res.lrc.lyric)

        }
    },
    mutations: {
        setPlayList(state, val) {
            // console.log('val',val)
            state.playList = val;
            // console.log('state', state.playList);
        },
        setPlayIndex(state, val) {
            if (val == 0) {
                state.playListCurrentIdx = state.playList.length - 1;
            }
            else if (val > state.playList.length - 1) {
                state.playListCurrentIdx = 0
            }
            else {
                state.playListCurrentIdx = val;
            }

        },
        setLoading(state, val) {
            state.loading = val;
        },
        setLyric(state, val) {

            state.lyric = val;

        },
        setCurrentTime(state,val){
            state.currentTime=val;
        }

    },
    getters: {
        lyricList(state) {
            let arr = state.lyric.split(/\n/igs).map((item, idx) => {
                let strArr=item.split(']')
              
                let min = parseInt(strArr[0].slice(1, 3))
                let sec = parseInt(strArr[0].slice(4, 6))
                let minn = parseInt(strArr[0].slice(7, strArr[0].length))
                // console.log(min,sec,minn)
                return {
                    text: strArr[1],
                    // time: parseInt(min) + (parseInt(sec) * 1000) + (parseInt(minn) * 60 * 1000)
                    time: (60000*min) +(sec*1000)+minn
                   
                }
                
            })
            arr.forEach((i,idx)=>{
                if(idx==0){
                    i.pre=0
                }
                else{
                    i.pre=arr[idx-1].time
                }
            })
            return arr
        
        }
    },
    modules: {}

})