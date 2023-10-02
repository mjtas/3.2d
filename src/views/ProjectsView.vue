<template>
<div class="main">
    <div class="main-container">
        <div class="main-heading">
            <h1>Projects</h1>
        </div>
        <div class="main-other">
            <div class="content">
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Github Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    <!-- Loop through each project in projects!-->
                    <tr v-for="project in projects" :key="project.name">
                    <td>
                        <a class="other-a">{{ project.name }}</a>
                    </td>
                    <td>
                        <a class="project-a" @click="toggleText(project.id)">{{ project.details }}</a><br>
                        <a class="other-a" v-if="project.show">{{ project.text }}</a>
                    </td>
                    <td>
                        <a class="project-a" @click="redirectToExternalLink">Code</a>
                    </td> 
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
 import axios from 'axios';
 
 export default {
   data() {
     return {
       projects: [],
     };
   },
   mounted() {
    axios.get('/projects.json')
      .then(response => {
        // Access the projects array inside response.data
        this.projects = response.data.projects;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  methods: {
        toggleText(id) {
        // Find the projet with the given name in projects array
            const project = this.projects.find(project => project.id === id);
            if (project) {
                // Toggle the 'show' property of the found workshop
                project.show = !project.show;
            }
        },
    },
    redirectToExternalLink() {
        window.location.href = 'https://github.com/mjtas?tab=repositories';
    }
};
</script>