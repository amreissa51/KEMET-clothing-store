// login.js — تسجيل الدخول

// مسؤوليته: التحقق من المستخدم وتسجيل دخوله.

// الـFlow
// login.html
//       ↓
// User enters email/password
//       ↓
// Validation
//       ↓
// Get users
//       ↓
// Find matching user
//       ↓
// Create currentUser
//       ↓
// Redirect
// بالتفصيل
// 1. يمسك Login Form
// const loginForm = document.getElementById("login-form");
// 2. يقرأ:
// Email
// Password
// Keep me signed in
// 3. Validation

// مثلاً:

// Email: empty
// Password: empty

// ❌ Please enter your email
// ❌ Please enter your password
// 4. يقرأ users
// localStorage
//      ↓
// users
// 5. يبحث عن المستخدم

// باستخدام:

// find()

// مثلاً:

// Email + Password
//        ↓
//      find()
//        ↓
// User found?
// 6. لو البيانات صحيحة

// يعمل:

// currentUser

// مثلاً:

// {
//   id: 1,
//   name: "Ahmed",
//   email: "ahmed@gmail.com"
// }

// ويحفظه في:

// localStorage
//     ↓
// currentUser
// 7. يوجه المستخدم

// مثلاً:

// login.html
//      ↓
// products.html

// أو:

// index.html

// ونحدد الوجهة حسب تصميم المشروع.

// 8. Logout

// هنا فيه نقطة مهمة.

// إحنا قلنا:

// login.js → Login + Current User + Logout

// لكن زر Logout لازم يكون موجود في مكان ما في الـHTML.

// لما المستخدم يعمل Logout:

// localStorage.removeItem("currentUser");

// ثم:

// Logout
//   ↓
// login.html
// login.js لا يعمل:

// ❌ Register
// ❌ Products
// ❌ Cart
// ❌ Theme
// ❌ Navbar