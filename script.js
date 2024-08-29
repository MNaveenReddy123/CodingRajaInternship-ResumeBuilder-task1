document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const about = document.getElementById('about').value;
    const photo = document.getElementById('photo').files[0];
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;
    const instagram = document.getElementById('instagram').value;

    let reader = new FileReader();
    reader.onload = function(e) {
        const photoURL = e.target.result;

        const resumeContent = `
            <div class="resume">
                <h2>${firstName} ${lastName}</h2>
                <p>Phone: ${phoneNumber}</p>
                <p>Email: ${email}</p>
                <img src="${photoURL}" alt="Photo" class="resume-photo">
                <h3>About Me</h3>
                <p>${about}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Links</h3>
                <p>GitHub: <a href="${github}">${github}</a></p>
                <p>LinkedIn: <a href="${linkedin}">${linkedin}</a></p>
                <p>Instagram: <a href="${instagram}">${instagram}</a></p>
            </div>
        `;

        document.getElementById('resume-preview').innerHTML = resumeContent;
    };

    if (photo) {
        reader.readAsDataURL(photo);
    }
});

document.getElementById('download-resume').addEventListener('click', function() {
    
    const resume = document.getElementById('resume-preview').innerHTML;
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(resume).set(opt).save();
});
