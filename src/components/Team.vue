<template>
<div>
    <div class="feed"  >
    <div  class="card" v-for="feed in feeds" :key="feed">
    <img class="thumb" v-bind:src="feed.pic">
    <article>
    <p>{{feed.sub}}</p>
    </article>
    </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      feeds: [
        {
          pic: 'https://i2.wp.com/uknews.co.in/wp-content/uploads/2017/12/new-year-party-in-doon.jpg?resize=300%2C350',
          sub: 'afadfsdfsdfsddfd'
        },
        {
          pic: 'https://i2.wp.com/uknews.co.in/wp-content/uploads/2017/12/new-year-party-in-doon.jpg?resize=300%2C350',
          sub: 'afadfsdfsdfsddfd'
        },
        {
          pic: 'https://i2.wp.com/uknews.co.in/wp-content/uploads/2017/12/new-year-party-in-doon.jpg?resize=300%2C350',
          sub: 'afadfsdfsdfsddfd'
        },
        {
          pic: 'https://i2.wp.com/uknews.co.in/wp-content/uploads/2017/12/new-year-party-in-doon.jpg?resize=300%2C350',
          sub: 'afadfsdfsdfsddfd'
        },
        {
          pic: 'https://i2.wp.com/uknews.co.in/wp-content/uploads/2017/12/new-year-party-in-doon.jpg?resize=300%2C350',
          sub: 'afadfsdfsdfsddfd'
        },
        {
          pic: 'https://i2.wp.com/uknews.co.in/wp-content/uploads/2017/12/new-year-party-in-doon.jpg?resize=300%2C350',
          sub: 'afadfsdfsdfsddfd'
        }
      ]
    }
  }
}
</script>
<style>
.feed {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  position:absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}

@media only screen and (min-width: 500px) {
  .feed {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (min-width: 300px) and (max-width: 500px) {
  .feed {
    height:180px;
    width:220px;
  }
    }
    @media only screen and (min-width: 500px) and (max-width: 1440px) {
  .feed {
    height:317px;
    width:735px;
  }
    }
@media only screen and (min-width: 850px) {
  .feed {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
.card {
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;

  position: relative;
  top: 0;
  transition: all .1s ease-in;
}
.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.2);
}
.card article {
  padding: 20px;
}
.card .thumb {
  background-size: cover;
  background-position: center center;
}
</style>
