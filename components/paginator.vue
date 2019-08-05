<template>
    <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 0 }">
            <a role="button" class="page-link"
                @click="previousPage()" >
                <span>&laquo;</span>
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
            <a role="button" class="page-link"
                @click="nextPage()" >
                <span>&raquo;</span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['currentPage', 'totalPages'],
    methods: {
        previousPage() {
            if (this.currentPage > 0) {
                this.pageChanged(this.currentPage - 1)
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.pageChanged(this.currentPage + 1)
            }
        },
        pageList() {
            return getPageList(this.totalPages, this.currentPage + 1, 9)
        },
        gotoPage(nextPage) {
            this.$emit('page-changed', nextPage)
        },
    }
}

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
</script>