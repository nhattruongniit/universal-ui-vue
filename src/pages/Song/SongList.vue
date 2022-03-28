<template>
  <div class="songList">
    <h1 class="songList_title">Choose a song</h1>

    <div class="songList_list" :style="{ display: song ? 'none' : 'block' }">
      <div v-for="(item, key) in songData" :key="key" class="songList_item">
        <div
          class="songList_overlap"
          :style="{ backgroundImage: `url(${item.avatar})` }"
        >
          <div class="songList_voice">
            <img
              class="songList_voice_union"
              alt=""
              src="../../assets/images/voice-union.svg"
            />
            <div class="songList_vector">
              <img
                class="vsongList_vector_img1"
                alt=""
                src="../../assets/images/voice-vector-01.svg"
              />
              <img
                class="vsongList_vector_img2"
                alt=""
                src="../../assets/images/voice-vector-02.svg"
              />
            </div>
          </div>
        </div>
        <div class="songList_info">
          <div class="songList_info_detail">
            <div class="heading-06">{{ item.title }}</div>
            <p class="heading-07">{{ item.author }}</p>
            <p class="heading-07">{{ item.id }}</p>
          </div>
        </div>
        <div class="songList_actions">
          <div class="songList_btnPlay" @click="handlePlay(item)">
            <img src="../../assets/images/text-play.svg" alt="" />
          </div>
          <div>Star: {{ star }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// mock data
import { dataSong } from "@/mocks/data";

export default {
  name: "SongList",
  props: {
    msg: String,
  },
  data() {
    return {
      songData: dataSong,
      song: null,
      star: null,
    };
  },
  methods: {
    handlePlay(item) {
      window.location.href = `uniwebview://play-song?songId=${item.id}`;
    },
    finish(star) {
      this.star = star;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./songList.css";
</style>
