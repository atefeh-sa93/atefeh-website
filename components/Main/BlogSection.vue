<template>
  <div>
    <v-app>
      <v-container>
        <v-row>
          <v-col md="12" lg="12" sm="12" xs="12">
            <div class="blog-title">
            <h3 class="black--text text-uppercase">Latest Blogs</h3>
            <p class="text-uppercase">
              A Lead UX & UI designer based in Canada
            </p>
          </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" lg="4" sm="12" cols="auto" v-for="blog in blogs" :key="blog.id">
            <div class="blog-item">
              <div class="blog-item-img">
                <a href="#">
                  <img :src="require(`../../assets/images/${blog.image}.jpg`)"/> 
                </a>
              </div>
              <div class="blog-item-info">
                <div class="date-meta">
                  <span class="date">{{ blog.date }}</span>
                  <span class="meta">{{ blog.meta }}</span>
                </div>
                <h5>
                  <a href="#">
                    {{ blog.title }}
                  </a>
                </h5>
                <p>{{ blog.abstract }}</p>
                <div class="blog-item-info-link">
                  <a class="link" href="#">Read More</a>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      blogs: [
        {
          id: 1,
          image: 'blog-1',
          date: '02 Mar',
          meta: 'Design',
          title: 'Make your Marketing website',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
          id: 2,
          image: 'blog-2',
          date: '02 Mar 2019',
          meta: 'Design',
          title: 'Make your Marketing website',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
          id: 3,
          image: 'blog-3',
          date: '02 Mar 2018',
          meta: 'Design',
          title: 'Make your Marketing website',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
      ],
    }
  },
})
</script>

<style lang="scss">
.blog-title {

  h3 {
    font-weight: 700;
    font-size: 35px;
    margin: 0 0 10px;
    position: relative;
    display: inline-block;
    vertical-align: top;
    z-index: 1;
    padding: 0 0 10px;

    &::before {
      content: '';
      width: 100px;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 20%;
      transform: translateX(-50%);
      background: #5e1185;
    }

    &::after {
      content: '';
      width: 60px;
      height: 2px;
      position: absolute;
      bottom: -5px;
      left: 12%;
      transform: translateX(-50%);
      background: #5e1185;
    }
  }

  p {
    margin-top: 20px;
    font-size: 14px;
    letter-spacing: 2px;
  }
}
.blog-item {
  img {
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }

  &-info {
    background: #ffffff;
    margin: -30px 10px 0;
    position: relative;
    padding: 18px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.19);

    .date-meta {
      margin-bottom: 8px;

      .date {
        background: #5e1185;
        font-size: 12px;
        position: absolute;
        top: -26px;
        padding: 4px 20px;
        color: #ffffff;
        border-radius: 0;
        left: 0px;
      }

      .meta {
        background: #ffffff;
        padding: 0px 12px;
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        border-radius: 3px;
        border: 1px solid #5e1185;
      }
    }

    h5 {
      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 17px;
        color: #000;
      }
    }

    p {
      margin-top: 10px;
      margin-bottom: 20px;
    }

    &-link {
      .link {
        display: inline-block;
        text-decoration: none;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        color: #5e1185;
        border-bottom: 2px solid currentColor;
      }
    }
  }
}
</style>
