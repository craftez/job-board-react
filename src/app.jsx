import React from 'react';
import Job from './components/Job.jsx'

class JobBoard extends React.Component {
	render() {
		return (<div>
			<h1>Hi from component</h1>
			<Job />
		</div>)
	}
}

React.render(
    <JobBoard />,
    document.getElementById('job-post')
);