# hi, i'm vivshaw 👋

please visit [my blog](https://vivshaw.github.io/) for my writing, or see below for contact info and other details.

```dhall
-- ./vivshaw.dhall

{- what i'm called -}
let handle = "vivshaw"

{- prelude -}
let prelude = "i'm a functional programming fan, and jack-of-all-trades.
               my background is in webdev, but i'm happy to explore anything.
               contact me if you need some Haskell or Scala. thanks."

{- my personal data -}
let Personal = { name : Text, city : Text, email : Text, web : Text, twitter : Text }
let personal = Personal { name = "Hannah Vivian Shaw"
                        , city = "Burlington, Vermont"
                        , email = "hvivianshaw 'at' gmail.com"
                        , website = "vivshaw.github.io"
                        , twitter = "@vvvivshaw"
                        }

{- bio and interests -}
let Bio = { role : Text, interests : List Text, languages : List Text, leisure : List Text }
let bio = Bio { role      =   "generalist"
              , interests =   [ "functional programming" , "strong typing" , "machine learning" , "webdev" , "JVM" ]
              , languages =   [ "TypeScript", "Scala", "Haskell", "Python", "Java" ]
              , leisure   =   [ "DJing house and techno", "road cycling", "photography", "synthesis" ]
              }
```
