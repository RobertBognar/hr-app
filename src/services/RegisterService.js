import http from './HttpService';
import profile from './ProfileService';
import upload from './UploadService';
import company from './CompanyService';

const registration = {
    register: async function (name, email, password, file, companyName) {
        const response = await http.post('/auth/local/register', {
            username: name,
            email: email,
            password: password,
        });
        const token = response.data.jwt;
        localStorage.setItem('token', token);

        const username = response.data.user.username;
        const userId = response.data.user.id;
        console.log(companyName);
        const profilePhotoId = await upload.upload(file);

        const nameOfCompany = await company.createCompany(companyName); // ovde je pozivamo createC

        if (typeof companyName === 'string') {
            await profile.createProfile(
                username,
                userId,
                profilePhotoId,
                nameOfCompany,
            );
        } else {
            await profile.createProfile(
                username,
                userId,
                profilePhotoId,
                companyName,
            );
        }
    },
};

export default registration;
