function useFoodFormInit(food) {
    const [formData, setFormData] = useState(null);
    const [category, setCategory] = useState("");
  
    useEffect(() => {
      if (food) {
        setFormData({
          documentId: food.documentId ?? null,
          name: food.name,
          image: food.image,
          type: food.type?.documentId,
          price: food.price,
          comment: food.comment,
        });
        setCategory(food.type?.category?.documentId);
      } else {
        setFormData({
          documentId: null,
          name: "",
          image: "",
          type: "",
          price: "",
          comment: "",
        });
      }
    }, [food]);
  
    return { formData, setFormData, category, setCategory };
  }
  