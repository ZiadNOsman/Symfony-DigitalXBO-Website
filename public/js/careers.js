//call onload like this to avoid overwriting the other scripts that call onload
var prev_onLoad = window.onload;
window.onload = function () {
    if (typeof (prev_onLoad) == 'function')
        prev_onLoad();

    $.ajax({
        url: "/jobs",
        type: 'GET',
        dataType: 'json',
        success: function (res) {

            $.each(res, function (indexInArray, job) {
                makeJobListing(job);
            });
        }
    });





}


//function to use to make a job listing
function makeJobListing(jobinfo) {
    job = document.createElement('div');
    $(job).addClass("job");

    job_name = document.createElement('span');

    $(job_name).addClass("job_name").html(jobinfo['jobName']).appendTo(job);

    seperator = document.createElement('div');
    $(seperator).addClass('seperator').appendTo(job);

    viewmorebtn = document.createElement('div');
    $(viewmorebtn).addClass('careers-viewmore-btn').html("view more").appendTo(job);

    //for the popup animation and toggle when you press "view more" on a job listing
    $(viewmorebtn).click(function () {
        $(".toggle").show(300);
        //populate the popup
        makePopup(jobinfo);

    });

    $(job).appendTo($('.section-start-careers'));

}

//to make the popup when you press 'view more' on a job listing
function makePopup(jobinfo) {
    console.log(jobinfo);

    toggle = $('.toggle');

    jobinfo_close = document.createElement('span');
    $(jobinfo_close).addClass('jobinfo_close').appendTo(toggle);

    //for the popup animation and toggle when you press "view more" on a job listing
    $(jobinfo_close).click(function () {
        $(".toggle").hide(300);
        $(".toggle").empty();
    });

    jobinfo_job_name = document.createElement('div');
    $(jobinfo_job_name).addClass('jobinfo_job_name').html(jobinfo['jobName']).appendTo(toggle);

    if (jobinfo['location'] != null) {
        jobinfo_location = document.createElement('h5');
        $(jobinfo_location).html("&#183 Location: " + jobinfo['location']).appendTo(toggle);
    }

    if (jobinfo['postDate'] != null) {
        jobinfo_postDate = document.createElement('h5');
        $(jobinfo_postDate).html("&#183 Posted on: " + jobinfo['postDate'].split('T')[0]).appendTo(toggle);
    }

    if (jobinfo['deadlineDate'] != null) {
        jobinfo_deadlineDate = document.createElement('h5');
        $(jobinfo_deadlineDate).html("&#183 Deadline: " + jobinfo['deadlineDate'].split('T')[0]).appendTo(toggle);
    }

    if (jobinfo['experience'] != null) {
        jobinfo_experience = document.createElement('h5');
        $(jobinfo_experience).html("&#183 Experience: " + jobinfo['experience']).css('margin-bottom', '15px').appendTo(toggle);
    }

    if (jobinfo['description'] != null) {
        jobinfo_description_title = document.createElement('h3');
        $(jobinfo_description_title).html('&#183 Description').appendTo(toggle);

        jobinfo_description_content = document.createElement('div');
        $(jobinfo_description_content).addClass('jobinfo_job_description').html(jobinfo['description']).appendTo(toggle);

    }

    if (jobinfo['tasks'] != null) {
        jobinfo_tasks_title = document.createElement('h3');
        $(jobinfo_tasks_title).html('&#183 Tasks:').appendTo(toggle);

        jobinfo_tasks_content = document.createElement('div');

        jobtasks = JSON.parse(jobinfo['tasks']);
        jobtasks.forEach(task => {
            a_task = document.createElement('p');
            $(a_task).html("&#183" + task).appendTo(jobinfo_tasks_content);

        });

        $(jobinfo_tasks_content).addClass('jobinfo_job_tasks').appendTo(toggle);

    }

    if (jobinfo['qualifications'] != null) {
        jobinfo_qualifications_title = document.createElement('h3');
        $(jobinfo_qualifications_title).html('&#183 Qualifications:').appendTo(toggle);

        jobinfo_qualifications_content = document.createElement('div');

        jobqualifications = JSON.parse(jobinfo['qualifications']);
        jobqualifications.forEach(qualification => {
            a_qualification = document.createElement('p');
            $(a_qualification).html("&#183" + qualification).appendTo(jobinfo_qualifications_content);

        });

        $(jobinfo_qualifications_content).addClass('jobinfo_job_qualifications').appendTo(toggle);

    }

    if (jobinfo['statement'] != null) {
        jobinfo_statement = document.createElement('div');
        $(jobinfo_statement).addClass("jobinfo_statement").html(jobinfo['statement']).appendTo(toggle);
    }
}