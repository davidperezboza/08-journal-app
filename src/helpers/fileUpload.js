export const fileUpload = async(file) => {
    if(!file) throw new Error('No tenemos ningún archivo a subir');

    const cloudURL = 'https://api.cloudinary.com/v1_1/react-journal/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData,
        });
        if(!resp.ok) throw new Error('No se puedo subir imagen');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
    } catch (error) {
        throw new Error(error.message);
    }
}
