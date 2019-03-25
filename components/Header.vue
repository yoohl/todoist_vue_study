<template>
  <div class="header">
    <div class="header_inner">
      <h1>
        <a href="#n">
          <svg data-v-032039b9="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svgs-path="sm1/todoist_logo.svg" class="todoist_svg__light_icon" width="24px" height="24px" color="#fff"><path data-v-032039b9="" fill="currentColor" fill-rule="evenodd" d="M21 0H3a3 3 0 0 0-3 3v3.7L4 9c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7L5.1 11c-.4.3-.7.3-1.2 0L0 8.8v2l4 2.4c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.1.1.5 0 .6l-9.7 5.6c-.4.2-.7.3-1.2 0A857 857 0 0 1 0 13v2l4 2.3c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7l-9.7 5.5c-.4.3-.7.3-1.2 0a857 857 0 0 1-4-2.3v4A3 3 0 0 0 3 24h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3"></path></svg>
        </a>
      </h1>
      <div id="quick_find"><div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" data-svgs-path="sm1/search.svg" class="search_icon light_icon"><defs><path id="sm1/search/a" d="M11.44 10.73l4.41 4.42a.5.5 0 0 1-.7.7l-4.42-4.41a6.5 6.5 0 1 1 .7-.71zM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"></path></defs><g fill="none" fill-rule="evenodd" transform="translate(4 4)"><mask id="sm1/search/b" fill="#fff"><use xlink:href="#sm1/search/a"></use></mask><g mask="url(#sm1/search/b)"><path fill="currentColor" d="M-3-4h24v24H-4z"></path></g></g></svg><input class="quick_find fixed_pos" type="text text_box" placeholder="빠른 검색" autocomplete="off" autocorrect="off" spellcheck="false"><a href="/Help/Filtering" class="help_icon" target="_blank" data-track="navigation|quick_find_help" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-svgs-path="sm1/question.svg" class="light_icon"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"></path><circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle></g></svg></a></div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.header {
  height: 43px;
  top: 0;
  position: fixed;
  z-index: 200;
  width: 100%;
  border-bottom: solid 1px #ca2100;
  background-color: #db4c3f;
}
.header_inner{
  width: 960px;
  margin: 0 auto;
}
h1 {
  float: left;
  margin-left: 36px;
  padding-top:7px
}
#quick_find {
    white-space: nowrap;
    margin-left: 328px;
    padding-top: 6px;
}
.search_icon {
    position: absolute;
    z-index: 15;
    margin-top: 4px;
    margin-left: 3px;
    cursor: text !important;
    -webkit-transition: opacity .1s ease-in;
    transition: opacity .1s ease-in;
}
.quick_find {
    border: 1px solid transparent !important;
    border-radius: 3px;
    padding: 5px;
    width: 300px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    color: #fff;
    padding-left: 30px;
    margin-top: 2px;
    background: 0;
    -webkit-transition: width .2s ease-in;
    transition: width .2s ease-in;
}
.quick_find:hover {
    background-color: rgba(255,255,255,0.2);
}
.quick_find::-webkit-input-placeholder{
  color:#fff
}
</style>
