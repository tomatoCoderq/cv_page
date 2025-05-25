package main

import (
	"html/template"
	"net/http"
	"path/filepath"
)

func renderTemplate(w http.ResponseWriter, data any) {
    files := []string{
        filepath.Join("templates", "main.html"),
    }

    t, err := template.ParseFiles(files...)
    if err != nil {
        http.Error(w, "Template error: "+err.Error(), http.StatusInternalServerError)
        return
    }

    err = t.ExecuteTemplate(w, "main.html", data)
    if err != nil {
        http.Error(w, "Execute error: "+err.Error(), http.StatusInternalServerError)
    }
}

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        renderTemplate(w, nil)
    })

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

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}