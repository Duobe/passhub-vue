<template>
  <div class="home">
    <div class="sidebar">
      <header>
        <div class="logo">
          <div class="avatar">
            <ph-logo></ph-logo>
          </div>
          <div class="title">Passhub</div>
        </div>
      </header>
      <ph-menu>
        <div class="options" slot="options" v-if="editable" :style="[optionStyle]">
          <div @click="editName">
            <ph-icon name="edit"></ph-icon>Rename
          </div>
          <div @click="delGroup">
            <ph-icon name="trash-2"></ph-icon>Delete
          </div>
        </div>

        <ph-menu-item
          @optionClicked="editableGroup"
          @click="switchGroup"
          v-for="(item, index) in groups"
          :index="index"
          :activeIndex="activeIndex"
          :key="index"
          :id="item.id"
        >
          <ph-input-container v-if="canRename && item.id === editGroupItem.id">
            <ph-icon :name="icon"></ph-icon>
            <ph-input
              @keyup.native="editGroup($event)"
              @click.native.stop
              @blur="blur"
              :value="item.title"
              v-focus
              class="solid"
            ></ph-input>
          </ph-input-container>
          <template v-else>
            <ph-icon :name="item.icon"></ph-icon>
            {{item.title}}
          </template>
        </ph-menu-item>

        <ph-menu-item class="create-input" v-if="visible" disabled>
          <ph-input-container>
            <ph-icon :name="icon"></ph-icon>
            <ph-input @keyup.native="createGroup($event)" v-model="title" v-focus class="solid"></ph-input>
          </ph-input-container>
        </ph-menu-item>

        <ph-menu-item @click="handleVisible" v-if="!visible" class="add">
          <ph-icon name="plus"></ph-icon>Add
        </ph-menu-item>
      </ph-menu>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
import PersistonStore from "../lib/persistonStore"

export default {
  name: "Home",
  data() {
    return {
      activeIndex: 0,
      visible: false,
      editable: false,
      canRename: false,
      icon: "inbox",
      title: "",

      groups: [],
      optionStyle: {},
      editGroupItem: {}
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  computed: {
    groupId: function() {
      const list = this.groups[this.activeIndex];
      const id = list && list.id;
      return id || this.$route.params.groupId;
    }
  },
  methods: {
    blur() {
      this.canRename = false;
      this.editable = false;
    },
    editGroup(event) {
      if (event.key === "Enter") {
        const Gid = event.target.parentNode.parentNode.id;
        const val = event.target.value;
        this.$store
          .dispatch("editGroup", {
            id: Gid,
            title: val
          })
          .then(() => {
            this.canRename = false;
            this.editable = false;
            this.getGroupList(Gid);
          });
      }
    },
    editName() {
      this.canRename = true;
    },
    delGroup() {
      const groupId = this.editGroupItem.id;

      this.$store.dispatch("delGroup", groupId).then(result => {
        if (result) {
          this.fetchGroups();
        }
        this.editable = false;
      });
    },
    editableGroup(event, index) {
      if (!this.editable) this.editable = true;
      if (this.canRename) this.canRename = false;

      this.optionStyle = {
        top: 29 + 42 * index + "px"
      };
      this.editGroupItem = this.groups[index];
    },
    switchGroup(event, index) {
      if (event.type === "contextmenu") return;

      if (this.editable) this.editable = false;

      if (this.activeIndex === index) return;

      this.activeIndex = index;

      if (this.groupId) {
        this.$router.push({ name: "entry", params: { groupId: this.groupId } });
      }
    },
    handleVisible() {
      this.visible = true;
    },
    getGroupList(groupId) {
      this.$store.dispatch("getGroups").then(result => {
        this.groups = result;
        this.activeIndex = result.findIndex(value => value.id === groupId);

        if (!!groupId) {
          this.$router.push({ name: "entry", params: { groupId } });
        }
      });
    },
    createGroup(event) {
      if (event.key === "Enter") {
        this.$store
          .dispatch("createGroup", { title: this.title, icon: this.icon })
          .then(result => {
            this.visible = false;
            this.title = "";

            return result.id;
          })
          .then(groupId => {
            this.getGroupList(groupId);
          });
      }
    },
    handleBlankArea(event) {
      if (event.target.closest(".create-input") || event.target.closest(".add"))
        return;
      if (this.visible) this.visible = false;
      if (this.editable) this.editable = false;
    },
    closeOption() {
      this.editable = false;
      this.editGroupItem = [];
    },
    fetchGroups() {
      this.$store.dispatch("getGroups").then(result => {
        this.groups = result;
        if (!!this.groupId) {
          this.$router.push({
            name: "entry",
            params: { groupId: this.groupId }
          });
        }
      });
    }
  },
  created() {
    PersistonStore.initialize().then(() => {
      this.fetchGroups();
    });

    document.addEventListener("click", this.handleBlankArea)
    document.addEventListener("contextmenu", this.closeOption)
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleBlankArea);
    document.removeEventListener("contextmenu", this.closeOption);
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');

.home {
  display: flex;
  height: 100%;
  .sidebar {
    width: 200px;
    border-right: @border;
    header {
      width: 199px;
      height: 56px;
      padding: 12px 14px;
      background-color: @grey3;
      & > div {
        display: inline-block;
      }
      & > .logo {
        width: 100%;
        .avatar {
          width: 32px;
          height: 32px;
          float: left;
          svg {
            width: 32px;
            height: 32px;
          }
        }
        .title {
          margin-left: 8px;
          line-height: 1.5;
          font-size: 22px;
          font-weight: 400;
          float: left;
          color: @textColor;
        }
      }
    }
  }
}
</style>