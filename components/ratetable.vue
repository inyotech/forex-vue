<template>
    <div class="mt-3">
        <ul class="mb-3 rates-table">
            <li v-for="(rate, index) in visibleRates" :key="index">
                {{rate.rate_date}}
                <span class="float-right">{{rate.rate.toFixed(2)}}</span>
            </li>
        </ul>
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 0 }">
                <a role="button" class="page-link" aria-label="Previous"
                    @click="previousPage()" >
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li v-for="(page, index) in pageList()" :key="index" 
                :class="{ break: page === 0, 'page-item': page !== 0, active: currentPage === page - 1 }" > 
                <a role="button" class="page-link"
                    :tabindex="page === 0 ? '-1' : '0'"
                    @click="gotoPage(page - 1)">
                    {{page === 0 ? '...' : page}}
                </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages - 1 }">
                <a role="button" class="page-link" aria-label="Next"
                    @click="nextPage()" >
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
function getPageList(totalPages, page, maxLength) {
    if (maxLength < 5) throw "maxLength must be at least 5";

    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start); 
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth*2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth*2 - 2) >> 1;
    if (totalPages <= maxLength) {
        // no breaks in list
        return range(1, totalPages);
    }
    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        // no break on left of page
        return range(1, maxLength-sideWidth-1)
            .concat([0])
            .concat(range(totalPages-sideWidth+1, totalPages));
    }
    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        // no break on right of page
        return range(1, sideWidth)
            .concat([0])
            .concat(range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
    // Breaks on both sides
    return range(1, sideWidth)
        .concat([0])
        .concat(range(page - leftWidth, page + rightWidth)) 
        .concat([0])
        .concat(range(totalPages-sideWidth+1, totalPages));
}

export default {
    data() {
        return {
            currentPage: 0,
            perPage: 40,
            totalPages: null,
            pageLinks: 6
        }
    },
    computed: {
        visibleRates() {
            return this.rates.slice(this.currentPage * this.perPage, 
                                   (this.currentPage + 1) * this.perPage)
        },
        rates() {
            return this.$store.getters.rateHistory
        }
    },
    methods: {
        previousPage() {
            if (this.currentPage > 0) {
                this.gotoPage(this.currentPage - 1)
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.gotoPage(this.currentPage + 1)
            }
        },
        gotoPage(nextPage) {
            this.currentPage = nextPage
            console.log('gotoPage', nextPage, this.currentPage)
        },
        pageList() {
            const list = getPageList(this.totalPages, this.currentPage + 1, 9)
            return list
        }
    },
    watch: {
        rates(newValue, oldValue) {
            this.totalPages = Math.ceil(this.rates.length / this.perPage)
            this.currentPage = 0
        }
    }

}
</script>

<style scoped>
ul.rates-table {
    column-width: 150px;
    list-style-type: none;
    margin: auto;
    padding: 0;
}

ul.rates-table li {
    padding: 0 .25em;
}

ul.rates-table li:nth-child(odd) {
    background: lightgray;
}
</style>