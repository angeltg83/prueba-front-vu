<template>
  <v-card>
    <template>
      <v-form>
        <v-container class="lighten-5 mb-6">
          <center> <h2>Lists of Books</h2> </center>
          <h4>Category</h4>
          <v-row dense>
            <v-col class="d-flex" cols="12" sm="3">
              <v-select :items="category" v-model="categorySelect" item-text="name" item-value="category_id" outlined
                placeholder="Seleccione la opción"></v-select>
            </v-col>
          </v-row>

          <!-- datatable -->
          <v-row>
            <v-col>
              <v-data-table :loading="loadGrid"
                :headers="headers" :items="books" class="elevation-1">

                <template v-slot:[`item.actions`]="{ item }">
                  <v-icon small class="mr-2" @click="viewDetailBook(item)">
                    mdi-eye
                  </v-icon>
                </template>

                <template v-slot:[`item.cover`]="{ item }">
                  <v-img lazy-src="https://picsum.photos/id/11/10/6" max-width="60" min-height="60" :src="item.cover">
                  </v-img>
                </template>
              </v-data-table>
            </v-col>
          </v-row>

        </v-container>
      </v-form>

      <v-dialog v-if="itemSelect" v-model="showDialog" width="800">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Details
          </v-card-title>

          <v-card-text>

            <v-row justify="space-around">
              <v-col cols="12">
                Title
                <div class="text-h6 mb-1">
                  {{itemSelect.title}}
                </div>
              </v-col>
              <v-col cols="6">
                Author
                <div class="text-h6 mb-1">
                  {{itemSelect.author}}
                </div>
              </v-col>

              <v-col cols="6">
                Publish date
                <div class="text-h6 mb-1">
                  {{itemSelect.publisher_date}}
                </div>
              </v-col>

            </v-row>

            <v-row>
              <v-col cols="6">
                Tags
                <ul>
                  <li v-for="(x, index) in itemSelect.tags" :key="index">
                    {{x.name}}
                  </li>
                </ul>
              </v-col>
            </v-row>

            <v-img lazy-src="https://picsum.photos/id/11/10/6" max-width="250" min-height="250" :src="itemSelect.cover">
            </v-img>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="showDialog = false">
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </template>
  </v-card>
</template>

<script>
import { createToastInterface } from "vue-toastification";
import axios from "axios";

export default {
  name: "BooksView",
  created() {
    this.getCategory();
  },

  data: () => ({
    totalDesserts: 0,
    options:{},
    category: [],
    categorySelect: null,
    books: [],
    loadGrid: false,
    showDialog: false,
    headers: [
      {
        text: "Id",
        value: "ID",
      },
      { text: "Title", value: "title" },
      { text: "Author", value: "author" },
      { text: "Cover", value: "cover", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    itemSelect: null,
    base_url: `http://localhost:8000/api/v1`
  }),

  methods: {
    viewDetailBook(item) {
      console.log(item)
      this.showDialog = true
      const { ID, title, author, cover, publisher_date, tags } = item
      this.itemSelect = { ID, title, author, cover, publisher_date, tags }

    },
    async getCategory() {
      try {
        const { data } = await axios.get(`${this.base_url}/get/getAll`);
        console.log(data);
        this.category = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getBooksByCategoryID(id) {
      try {
        this.loadGrid = true;
        const { data } = await axios.get(`${this.base_url}/get/getLibros/${id}`);
        this.books = data.data;
        this.loadGrid = false;
      } catch (error) {
        console.log(error);
      }
    },

    getToastSuccess(msg) {
      createToastInterface({
        timeout: 2000,
      }).success(msg);
    },
    getToastWarning(msg) {
      createToastInterface({
        timeout: 2000,
      }).warning(msg);
    },
  },
  watch: {
    categorySelect(newValue, oldValue) {
      if (newValue != oldValue) {
        this.getBooksByCategoryID(newValue);
      }
    },
 
  },

  async mounted() { },
};
</script>
