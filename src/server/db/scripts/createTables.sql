SELECT public.cleaning.date_cleaned, public."user".name, public.apartment.description FROM cleaning
LEFT JOIN public."user"
ON (public.user."id" = cleaning."user-id")
LEFT JOIN public.apartment
ON (public."apartment".id = cleaning."apartment");
