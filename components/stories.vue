<template>
    <fieldset>
        <legend class="small text-muted">Financial Stories</legend>
        <div v-for="(story, index) in stories" :key="'story-' + index" class="card mb-2" >
            <div class="card-body" >
                <h5 class="card-title" >{{story.title}}</h5>
                <p class="card-text" >{{story.description}}</p>
                <p class="mb-0">
                    <a :href="story.link" class="card-link small" >Link</a>
                    <span class="float-right small text-muted">
                        {{age(story.published_date)}}
                    </span>
                </p>
            </div>
        </div>
    </fieldset>
</template>

<script>
import * as api from '../store/storiesapi'
import moment from 'moment'

export default {
    data() {
        return {
            stories: []
        }
    },
    methods: {
        age(publishedDate) {
            return moment(publishedDate).fromNow()
        }
    },
    mounted() {
        api.fetchStories(5)
            .then(data => {
                this.stories = data.data
            })
    }
}
</script>