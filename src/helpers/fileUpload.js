export const fileUpload = async (file) => {
    if (!file) throw new Error('File not found')
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/journal-react-app/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'journal-app');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });
        if (!resp.ok) throw new Error('We couldn upload file');
        const cloudinaryResp = await resp.json();
        return cloudinaryResp.secure_url;
    } catch (error) {
        console.log(error);
        throw new Error( error.message )
    }
}