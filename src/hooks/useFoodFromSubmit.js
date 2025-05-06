function useFoodFormSubmit(formData, router) {
    return (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);

        const values = {
            data: {
                name: formData.name,
                image: formData.image,
                price: formData.price,
                comment: formData.comment,
                type: {
                    connect: [formData.type],
                },
            },
        };

        if (formData.documentId) {
            // update
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            };
            fetch(`http://localhost:1337/api/foods/${formData.documentId}`, options)
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);
                    router.push(`/foods/${res.data.documentId}`);
                })
                .catch((error) => console.error(error));
        } else {
            // create
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            };
            fetch("http://localhost:1337/api/foods", options)
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);
                    router.push(`/foods/${res.data.documentId}`);
                })
                .catch((error) => console.error(error));
        }
    }
}