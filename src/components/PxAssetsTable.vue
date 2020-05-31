<template>
  <table class>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span
            @click="changeSortOrder"
            :class="{up: this.sortOrder ===1, down: this.sortOrder=== -1}"
            class="underline cursor-pointer"
          >Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
            style="max-width: 50px"
          />
        </td>
        <td># {{ a.rank }}</td>
        <td>
          <router-link
            :to="`/coin/${a.name.toLowerCase()}`"
            class="underline text-green-500 text-xl"
          >{{ a.name }}</router-link>
          <p class="text-gray-500">{{ a.symbol }}</p>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >{{ a.changePercent24Hr | percent }}</td>
        <td class>
          <px-button @custom-click="goToCoin(a.id)" :isLoading="false">
            <template v-slot:btnName>
              <span>Detalles</span>
            </template>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "@/components/PxButton";
export default {
  name: "PxAssetsTable",
  components: {
    PxButton
  },
  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      filter: "",
      sortOrder: 1
    };
  },
  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder === 1 ? -1 : 1;
      return this.assets
        .filter(a => {
          return (
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
          );
        })
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
    }
  },
  methods: {
    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
    goToCoin(coin) {
      this.$router.push({ name: "Coin-Detail", params: { id: coin } });
    }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
