<template>
    <div class="col-md-4">
        <div class="event-card">
            <h4 class="card-title">
                {{event.title}}
            </h4>
            <p class="card-text">
                {{event.description}}
            </p>
            <div class="list-group">
                <em class="list-group-item">{{event.date}}</em>
                
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['event']
}
</script>