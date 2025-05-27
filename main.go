package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func main() {

	tmpl := template.Must(template.ParseFiles(
		"templates/base.html",
		"templates/index.html",
		"templates/header.html",
		"templates/stack.html",
		"templates/projects.html",
		"templates/achievements.html",
		"templates/more.html",
	))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		err := tmpl.ExecuteTemplate(w, "base.html", nil)
		if err != nil {
			http.Error(w, "Template error: "+err.Error(), http.StatusInternalServerError)
		}
	})
	
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))


	err := http.ListenAndServe(":8088", nil)
	if err != nil {
		fmt.Println(err)
	}

	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    //     renderTemplate(w, nil)
    // })

    // http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))

    // http.ListenAndServe(":8080", nil)

	// tmpl := template.New("tmpl")

	// tmpl.Funcs(map[string]any{})

	// tmpl, err := tmpl.ParseGlob("templates/*.html")
	// if err != nil {
	// 	panic(err)
	// }

	// http.Handle("/templates/", http.StripPrefix("/templates/", http.HandlerFunc(HandleTemplate)))


	// fsHandler := http.FileServer(http.Dir("./templates"))
	// http.Handle("/files/", http.StripPrefix("/files/", fsHandler))
	// http.Handle("/", http.FileServer(http.Dir(".")))

	// err := http.ListenAndServe(":8088", nil)
	// if err != nil {
	// 	panic(err)
	// }
}