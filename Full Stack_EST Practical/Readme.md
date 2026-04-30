# Full Stack Development - Set 3

This repository contains conduct done by myself  for **Set 3 Practical Questions** given in EST Practical.
I have maintained this readme explicitly to ensure no confusion regarding set, as their were 2 sets today. I had Set 2 as my UID ends with even digit

---

## 📌 Q3: Prop Drilling in React

### 🔹 Problem

In a small app with component hierarchy:

App → Header → Icon → UserProfile

Pass the **username** from `App` to `UserProfile` **without using Context API**, demonstrating **prop drilling**.

### 🔹 Explanation

Prop drilling is the process of passing data from a parent component to deeply nested child components through intermediate components.

Even if intermediate components (`Header`, `Icon`) do not need the data, they must pass it forward.

### 🔹 Flow

* `App` → holds the username
* `Header` → receives and forwards
* `Icon` → receives and forwards
* `UserProfile` → finally uses it

### 🔹 Folder Structure

```
Prop_drilling/
└── vite-project/
```

---

## 📌 Q4: JPA Entity Mapping in Spring Boot

### 🔹 Problem

Explain the role of an Entity and create a `Student` entity with:

* id
* name
* email
* course

### 🔹 Explanation

An **Entity** in JPA represents a table in the database.

* Each object → a row
* Each field → a column
* Annotated using `@Entity`, `@Id`, etc.

### 🔹 Example

```java
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String course;
}
```

### 🔹 Key Annotations

* `@Entity` → marks class as database table
* `@Id` → primary key
* `@GeneratedValue` → auto-increment

### 🔹 Folder Structure

```
Springboot/
└── demo/
```

---

## 👨‍💻 Author

Abhideep Jain

---

