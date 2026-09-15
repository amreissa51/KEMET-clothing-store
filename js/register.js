// register.js — إنشاء الحساب

// مسؤوليته الوحيدة: تسجيل مستخدم جديد.

// الـFlow
// register.html
//       ↓
// User enters data
//       ↓
// Validation
//       ↓
// Check existing users
//       ↓
// Create user object
//       ↓
// Save in localStorage
//       ↓
// Redirect → login.html
// هيعمل إيه بالتفصيل؟
// 1. يمسك الـForm

// مثلاً:

// const registerForm = document.getElementById("register-form");

// ويراقب:

// registerForm.addEventListener("submit", ...)
// 2. يقرأ البيانات

// من الـHTML عندنا:

// Name
// Email
// Password
// Confirm Password
// Terms checkbox

// ويجيب قيمهم.

// 3. Validation

// يتأكد من:

// Name مش فاضي
// Email مش فاضي
// Email شكله صحيح
// Password موجود
// Password طوله مناسب
// Confirm Password = Password
// Terms متعلم عليها

// مثلاً:

// Password: 12345678
// Confirm: 1234567

// ❌ Passwords do not match
// 4. يجيب المستخدمين الموجودين

// من:

// localStorage.getItem("users")

// ولو مفيش:

// []
// 5. يتأكد إن الـEmail مش موجود

// مثلاً:

// users:
// Ahmed@gmail.com
// Ali@gmail.com

// New:
// Ahmed@gmail.com

// ❌ Account already exists
// 6. يعمل User Object

// مثلاً:

// {
//   id: 1,
//   name: "Ahmed",
//   email: "ahmed@gmail.com",
//   password: "12345678",
//   createdAt: "..."
// }
// 7. يحفظه
// users
//  ↓
// localStorage
// 8. بعد التسجيل

// يروح:

// register.html
//       ↓
// login.html
// إذن register.js لا يعمل:

// ❌ Login
// ❌ Cart
// ❌ Products
// ❌ Navbar