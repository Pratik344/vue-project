<template>
<h2>{{currentDate}}</h2>
<div class="scrollmenu">
    <a v-for="date in date" :key="date" @click="getData(date)">{{date}}</a>
</div>
<div>
    <legend>
        Timing Slots
    </legend>
    <br/>
    <br/>
    <div class="chip-group" tabindex="-1" role="radiogroup">
        <div class="chip chip-checkbox" aria-labelledby="radioOneLabel" tabindex="0" role="radio" aria-checked="false" v-for="time in time" :key="time">
            <input type="radio" name="radioEx"  />
            <span id="radioOneLabel">{{time}}</span>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'appointmentData',
    data() {
        return {
            date: [],
            currentDate: '',
            time:[],
        }
    },
    mounted() {
        this.getDate()
        this.getTime()
    },
    methods: {
        getDate() {
            let startDate = moment();
            let endDate = moment('2021-12-30');
            // let date = [];
            for (var m = moment(startDate); m.isBefore(endDate); m.add(1, 'days')) {
                this.date.push(m.format('YYYY-MM-DD'));
            }
            console.log(this.date)
        },
        getData(clickDate) {
            this.currentDate = clickDate;
            console.log('this.currentDate: ', this.currentDate);
        },
        getTime() {
            const items = [];
            new Array(12).fill().forEach((acc, index) => {
                items.push(moment({
                    hour: index
                }).format('h:mm A'));
                items.push(moment({
                    hour: index,
                    minute: 30
                }).format('h:mm A'));
            })
           this.time=items
        }
    }

}
</script>

<style scoped>
div.scrollmenu {
    background-color: #333;
    overflow: auto;
    white-space: nowrap;
}

div.scrollmenu a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px;
    text-decoration: none;
}

div.scrollmenu a:hover {
    background-color: #777;
}

button {
    cursor: pointer;
}

.chip-group {
    display: flex;
    flex-wrap: wrap;
}

.chip.chip-checkbox>.chip-add-icon::after {
    content: "add"
}

.chip.chip-checkbox.active>.chip-add-icon::after {
    content: "done"
}

.chip>* {
    margin-right: 2px;
    margin-left: 2px;
    color: #757373;
}

.chip input {
    display: none;
}

.chip.chip-checkbox,
.chip.chip-toggle,
.chip.clickable {
    cursor: pointer;
}

.chip.active {
    background-color: #d3d2d2;
    border-color: #c3c2c2;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12)
}

.chip:hover,
.chip:focus {
    background-color: #e3e2e2;
}

.chip:active:focus {
    background-color: #d3d2d2;
}

.chip button {
    border: none;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    background: none;
    display: inline-flex;
}

.chip {
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    border-radius: 30px;
    border: 1px solid #d3d2d2;
    display: inline-flex;
    align-items: center;
    padding: 4px 6px 4px 6px;
    margin-right: 6px;
    margin-bottom: 6px;
}

.chip i.material-icons {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
