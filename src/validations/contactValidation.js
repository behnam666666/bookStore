import * as Yup from "yup";

export const contactValidationSchemalogin = Yup.object().shape({
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("آدرس ایمیل الزامی می باشد"),
    password: Yup.string().required("پسور الزامی می باشد")
});

export const contactValidationSchemasinup = Yup.object().shape({
  email: Yup.string().email("آدرس ایمیل معتبر نیست")
    .required("آدرس ایمیل الزامی می باشد"),
    password: Yup.string()
    .required("پسورد نمی‌تواند خالی باشد")
    .min(6, "پسورد باید حداقل ۶ کاراکتر باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "پسورد و تکرار پسورد باید یکسان باشند")
    .required("تکرار پسورد نمی‌تواند خالی باشد"),
    firstname: Yup.string().required("نام الزامی می باشد"),
    lastname: Yup.string().required("نام خانوادگی الزامی می باشد"),
});
