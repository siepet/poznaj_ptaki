import { Bird, Question, Score } from "./types";

const birds: Bird[] = [
  {
    id: 1,
    name: "sterniczka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wei%C3%9Fkopfruderente_Oxyura_leucocephala_050324_Ausschnitt.jpg/150px-Wei%C3%9Fkopfruderente_Oxyura_leucocephala_050324_Ausschnitt.jpg",
  },
  {
    id: 2,
    name: "łabędź niemy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Cygnus_olor_Adult_Lyngby_Denmark.jpg/150px-Cygnus_olor_Adult_Lyngby_Denmark.jpg",
  },
  {
    id: 3,
    name: "łabędź czarnodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cygnus_bewickii_01.jpg/150px-Cygnus_bewickii_01.jpg",
  },
  {
    id: 4,
    name: "łabędź krzykliwy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Singschwan.jpg/150px-Singschwan.jpg",
  },
  {
    id: 5,
    name: "bernikla obrożna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Branta_bernicla_bernicla_-_Brent_Goose.jpg/150px-Branta_bernicla_bernicla_-_Brent_Goose.jpg",
  },
  {
    id: 6,
    name: "bernikla białolica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Weisswangengans-01.jpg/150px-Weisswangengans-01.jpg",
  },
  {
    id: 7,
    name: "bernikla rdzawoszyja",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Branta_ruficollis_001.jpg/150px-Branta_ruficollis_001.jpg",
  },
  {
    id: 8,
    name: "bernikla kanadyjska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Wild_goose.jpg/150px-Wild_goose.jpg",
  },
  {
    id: 9,
    name: "gęgawa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Greylag_Goose_%28Anser_anser%29.jpg/150px-Greylag_Goose_%28Anser_anser%29.jpg",
  },
  {
    id: 10,
    name: "gęś zbożowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bean.goose.600pix.jpg/150px-Bean.goose.600pix.jpg",
  },
  {
    id: 11,
    name: "gęś krótkodzioba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Anser_brachyrhynchus_%28Norway%29.jpg/150px-Anser_brachyrhynchus_%28Norway%29.jpg",
  },
  {
    id: 12,
    name: "gęś tundrowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Tundra_Bean_Goose.jpg/150px-Tundra_Bean_Goose.jpg",
  },
  {
    id: 13,
    name: "gęś białoczelna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Anser_albifrons_sponsa_Colusa_NWR.jpg/150px-Anser_albifrons_sponsa_Colusa_NWR.jpg",
  },
  {
    id: 14,
    name: "gęś mała",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Anser_erythropus.jpg/150px-Anser_erythropus.jpg",
  },
  {
    id: 15,
    name: "kazarka egipska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Alopochen-aegyptiacus.jpg/150px-Alopochen-aegyptiacus.jpg",
  },
  {
    id: 16,
    name: "ohar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Common.shelduck.2.arp.750pix.jpg/150px-Common.shelduck.2.arp.750pix.jpg",
  },
  {
    id: 17,
    name: "kazarka rdzawa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ruddy_Shelduck_489.jpg/150px-Ruddy_Shelduck_489.jpg",
  },
  {
    id: 18,
    name: "mandarynka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mandarin.duck.arp.jpg/150px-Mandarin.duck.arp.jpg",
  },
  {
    id: 19,
    name: "lodówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Long-tailed-duck.jpg/150px-Long-tailed-duck.jpg",
  },
  {
    id: 20,
    name: "birginiak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Stellersdrake2.jpg/150px-Stellersdrake2.jpg",
  },
  {
    id: 21,
    name: "edredon turkan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Somateria_spectabilis_%28King_Eider_-_Prachteiderente%29_-_Weltvogelpark_Walsrode_2012-16.jpg/150px-Somateria_spectabilis_%28King_Eider_-_Prachteiderente%29_-_Weltvogelpark_Walsrode_2012-16.jpg",
  },
  {
    id: 22,
    name: "edredon zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Somateria_mollissima_male_female.jpg/150px-Somateria_mollissima_male_female.jpg",
  },
  {
    id: 23,
    name: "kamieniuszka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Histrionicus_histrionicus_drake_Barnegat.jpg/150px-Histrionicus_histrionicus_drake_Barnegat.jpg",
  },
  {
    id: 24,
    name: "uhla",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Velvet_Scoter%2C_Eyebrook_Reservoir%2C_Leics.jpg/150px-Velvet_Scoter%2C_Eyebrook_Reservoir%2C_Leics.jpg",
  },
  {
    id: 25,
    name: "uhla garbonosa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wwscoter12.JPG/150px-Wwscoter12.JPG",
  },
  {
    id: 26,
    name: "markaczka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Melanitta_nigra.jpg/150px-Melanitta_nigra.jpg",
  },
  {
    id: 27,
    name: "markaczka amerykańska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Melanitta_americana_Barnegat_NJ.jpg/150px-Melanitta_americana_Barnegat_NJ.jpg",
  },
  {
    id: 28,
    name: "gągoł",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bucephala_clangula.jpg/150px-Bucephala_clangula.jpg",
  },
  {
    id: 29,
    name: "bielaczek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Smew.both.arp.600pix.jpg/150px-Smew.both.arp.600pix.jpg",
  },
  {
    id: 30,
    name: "nurogęś",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mergus_merganser_-Sandwell_-England_-male-8.jpg/150px-Mergus_merganser_-Sandwell_-England_-male-8.jpg",
  },
  {
    id: 31,
    name: "szlachar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Mergus_serrator_-New_Jersey_-USA_-winter-8.jpg/150px-Mergus_serrator_-New_Jersey_-USA_-winter-8.jpg",
  },
  {
    id: 32,
    name: "hełmiatka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Red-crested.pochard.slimbridge.arp.jpg/150px-Red-crested.pochard.slimbridge.arp.jpg",
  },
  {
    id: 33,
    name: "głowienka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/20050514-003-aythya-ferina.jpg/150px-20050514-003-aythya-ferina.jpg",
  },
  {
    id: 34,
    name: "podgorzałka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Aythya_nyroca16.jpg/150px-Aythya_nyroca16.jpg",
  },
  {
    id: 35,
    name: "czerniczka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Aythya-collaris-001.jpg/150px-Aythya-collaris-001.jpg",
  },
  {
    id: 36,
    name: "czernica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tufted-Duck-male-female.jpg/150px-Tufted-Duck-male-female.jpg",
  },
  {
    id: 37,
    name: "ogorzałka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Aythya_marila1.jpg/150px-Aythya_marila1.jpg",
  },
  {
    id: 38,
    name: "ogorzałka mała",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Veilchenente_Aythya_affinis_0505281.jpg/150px-Veilchenente_Aythya_affinis_0505281.jpg",
  },
  {
    id: 39,
    name: "bajkałówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Anas.formosa.4.jpg/150px-Anas.formosa.4.jpg",
  },
  {
    id: 40,
    name: "cyranka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Garganey_duck.jpg/150px-Garganey_duck.jpg",
  },
  {
    id: 41,
    name: "płaskonos zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Anas_clypeata_2.jpg/150px-Anas_clypeata_2.jpg",
  },
  {
    id: 42,
    name: "cyranka modroskrzydła",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bluewingedteal54.jpg/150px-Bluewingedteal54.jpg",
  },
  {
    id: 43,
    name: "krakwa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Anas_strepera_FWS.jpg/150px-Anas_strepera_FWS.jpg",
  },
  {
    id: 44,
    name: "świstun zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Anas_penelope_001.jpg/150px-Anas_penelope_001.jpg",
  },
  {
    id: 45,
    name: "świstun amerykański",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Anas_americana_-_drake.jpg/150px-Anas_americana_-_drake.jpg",
  },
  {
    id: 46,
    name: "krzyżówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/150px-Anas_platyrhynchos_male_female_quadrat.jpg",
  },
  {
    id: 47,
    name: "rożeniec",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Northern_Pintail.jpg/150px-Northern_Pintail.jpg",
  },
  {
    id: 48,
    name: "cyraneczka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Common_Teal_%28Anas_crecca%29_near_Hodal%2C_Haryana_W_IMG_6577.jpg/150px-Common_Teal_%28Anas_crecca%29_near_Hodal%2C_Haryana_W_IMG_6577.jpg",
  },
  {
    id: 49,
    name: "cyraneczka karolińska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Anas_carolinensis_FWS.jpg/150px-Anas_carolinensis_FWS.jpg",
  },
  {
    id: 50,
    name: "przepiórka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Coturnix_coturnix_%28Lmbuga%29.jpg/150px-Coturnix_coturnix_%28Lmbuga%29.jpg",
  },
  {
    id: 51,
    name: "kuropatwa zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Perdix_perdix_%28Marek_Szczepanek%29.jpg/150px-Perdix_perdix_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 52,
    name: "bażant zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Phasianus_colchicus_2_tom_%28Lukasz_Lukasik%29.jpg/150px-Phasianus_colchicus_2_tom_%28Lukasz_Lukasik%29.jpg",
  },
  {
    id: 53,
    name: "jarząbek zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Haselhuhn-01.jpg/150px-Haselhuhn-01.jpg",
  },
  {
    id: 54,
    name: "pardwa mszarna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/WillowPtarmigan23.jpg/150px-WillowPtarmigan23.jpg",
  },
  {
    id: 55,
    name: "głuszec zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Capercaillie%281%29.jpg/150px-Capercaillie%281%29.jpg",
  },
  {
    id: 56,
    name: "cietrzew zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Black_Grouse_Nationalpark_Bayerischer_Wald.jpg/150px-Black_Grouse_Nationalpark_Bayerischer_Wald.jpg",
  },
  {
    id: 57,
    name: "flaming różowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Phoenicopterus_roseus_%28Walvis_Bay%29.jpg/150px-Phoenicopterus_roseus_%28Walvis_Bay%29.jpg",
  },
  {
    id: 58,
    name: "perkozek grubodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pied-billed_Grebe_0561.jpg/150px-Pied-billed_Grebe_0561.jpg",
  },
  {
    id: 59,
    name: "perkozek zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Tachybaptus_ruficollis_ruficollis.jpg/150px-Tachybaptus_ruficollis_ruficollis.jpg",
  },
  {
    id: 60,
    name: "perkoz rdzawoszyi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Podiceps_griseigena_3_%28Marek_Szczepanek%29.jpg/150px-Podiceps_griseigena_3_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 61,
    name: "perkoz dwuczuby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flickr_-_Rainbirder_-_Great_Crested_Grebe_%28Podiceps_cristatus%29.jpg/150px-Flickr_-_Rainbirder_-_Great_Crested_Grebe_%28Podiceps_cristatus%29.jpg",
  },
  {
    id: 62,
    name: "perkoz rogaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Podiceps_auritus1.jpg/150px-Podiceps_auritus1.jpg",
  },
  {
    id: 63,
    name: "perkoz zausznik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Podiceps_nigricollis_%28Marek_Szczepanek%29.jpg/150px-Podiceps_nigricollis_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 64,
    name: "gołąb miejski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Wohlgen%C3%A4hrte_Stadttauben.jpg/150px-Wohlgen%C3%A4hrte_Stadttauben.jpg",
  },
  {
    id: 65,
    name: "siniak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/ColumbaOenas.jpg/150px-ColumbaOenas.jpg",
  },
  {
    id: 66,
    name: "grzywacz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_world%27s_largest_woodpigeon.jpg/150px-The_world%27s_largest_woodpigeon.jpg",
  },
  {
    id: 67,
    name: "turkawka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Streptopelia_turtur_Pinares_de_Rostrogordo.jpg/150px-Streptopelia_turtur_Pinares_de_Rostrogordo.jpg",
  },
  {
    id: 68,
    name: "turkawka wschodnia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Streptopelia_orientalis_2007.jpg/150px-Streptopelia_orientalis_2007.jpg",
  },
  {
    id: 69,
    name: "sierpówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Collared.dove.jpg/150px-Collared.dove.jpg",
  },
  {
    id: 70,
    name: "pustynnik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Syrrhaptes_paradoxus.jpg/150px-Syrrhaptes_paradoxus.jpg",
  },
  {
    id: 71,
    name: "lelek zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Paukstelis.jpg/150px-Paukstelis.jpg",
  },
  {
    id: 72,
    name: "jerzyk alpejski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Avo_apumel10.jpg/150px-Avo_apumel10.jpg",
  },
  {
    id: 73,
    name: "jerzyk blady",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Apuspallidus_9043.JPG/150px-Apuspallidus_9043.JPG",
  },
  {
    id: 74,
    name: "jerzyk zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/ApusApusKlausRoggel01.jpg/150px-ApusApusKlausRoggel01.jpg",
  },
  {
    id: 75,
    name: "kukułka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kuckuck_im_Flug_v._J._Schmidt.jpg/150px-Kuckuck_im_Flug_v._J._Schmidt.jpg",
  },
  {
    id: 76,
    name: "strepet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Tetrax_male_1.JPG/150px-Tetrax_male_1.JPG",
  },
  {
    id: 77,
    name: "drop zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dabao.jpg/150px-Dabao.jpg",
  },
  {
    id: 78,
    name: "hubara arabska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/BustardsLyd4.jpg/150px-BustardsLyd4.jpg",
  },
  {
    id: 79,
    name: "wodnik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Rallus_aquaticus_1_%28Marek_Szczepanek%29.jpg/150px-Rallus_aquaticus_1_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 80,
    name: "derkacz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Crex_crex00.jpg/150px-Crex_crex00.jpg",
  },
  {
    id: 81,
    name: "kropiatka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MG_019417--1-0--2009.jpg/150px-MG_019417--1-0--2009.jpg",
  },
  {
    id: 82,
    name: "zielonka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Porzana_parva.jpg/150px-Porzana_parva.jpg",
  },
  {
    id: 83,
    name: "karliczka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Baillon%27s_crake.jpg/150px-Baillon%27s_crake.jpg",
  },
  {
    id: 84,
    name: "kokoszka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Moorhen.jpg/150px-Moorhen.jpg",
  },
  {
    id: 85,
    name: "łyska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Common_Coot_%28Fulica_atra%29_in_a_Nelumbo_nucifera_%28Indian_Lotus%29_pond_W_IMG_8846.jpg/150px-Common_Coot_%28Fulica_atra%29_in_a_Nelumbo_nucifera_%28Indian_Lotus%29_pond_W_IMG_8846.jpg",
  },
  {
    id: 86,
    name: "żuraw stepowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Zuraw_stepowy_Anthropoides_virgo_RB1.jpg/150px-Zuraw_stepowy_Anthropoides_virgo_RB1.jpg",
  },
  {
    id: 87,
    name: "żuraw zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Grus_grus_2_%28Marek_Szczepanek%29.jpg/150px-Grus_grus_2_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 88,
    name: "kulon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Eurasian_Thicknee_-_Along_Po_river_-_Italy_FJ0A1202_%2828252446508%29.jpg/150px-Eurasian_Thicknee_-_Along_Po_river_-_Italy_FJ0A1202_%2828252446508%29.jpg",
  },
  {
    id: 89,
    name: "ostrygojad",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Haematopus_ostralegus_He.jpg/150px-Haematopus_ostralegus_He.jpg",
  },
  {
    id: 90,
    name: "szczudłak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Black-necked_Stilt.jpg/150px-Black-necked_Stilt.jpg",
  },
  {
    id: 91,
    name: "szablodziób",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Recurvirostra_avosetta_-_Zoo_Frankfurt_4.jpg/150px-Recurvirostra_avosetta_-_Zoo_Frankfurt_4.jpg",
  },
  {
    id: 92,
    name: "siewnica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pluvialis_squatarola_%28summer_plumage%29.jpg/150px-Pluvialis_squatarola_%28summer_plumage%29.jpg",
  },
  {
    id: 93,
    name: "siewka złota",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Goldregenpfeifer.jpg/150px-Goldregenpfeifer.jpg",
  },
  {
    id: 94,
    name: "siewka złotawa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pluvialis_fulvaUSFWS003413A.jpg/150px-Pluvialis_fulvaUSFWS003413A.jpg",
  },
  {
    id: 95,
    name: "siewka szara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Pluvialis_dominica1.jpg/150px-Pluvialis_dominica1.jpg",
  },
  {
    id: 96,
    name: "mornel",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Charadrius_morinellus_male.jpg/150px-Charadrius_morinellus_male.jpg",
  },
  {
    id: 97,
    name: "sieweczka obrożna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sieweczka.jpg/150px-Sieweczka.jpg",
  },
  {
    id: 98,
    name: "sieweczka rzeczna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Charadrius_dubius_4_%28Marek_Szczepanek%29.jpg/150px-Charadrius_dubius_4_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 99,
    name: "sieweczka morska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Charadrius_alexandrinus_%28Kentish_Plover%29%2C_Port_d%27Alc%C3%BAdia%2C_Mallorca.jpg/150px-Charadrius_alexandrinus_%28Kentish_Plover%29%2C_Port_d%27Alc%C3%BAdia%2C_Mallorca.jpg",
  },
  {
    id: 100,
    name: "sieweczka mongolska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mongolian_Plover_%28Charadrius_mongolus%29_3.jpg/150px-Mongolian_Plover_%28Charadrius_mongolus%29_3.jpg",
  },
  {
    id: 101,
    name: "sieweczka pustynna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Greater_Sand_Plover.jpg/150px-Greater_Sand_Plover.jpg",
  },
  {
    id: 102,
    name: "sieweczka długonoga",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Caspian_Plover_%28Charadrius_asiaticus%29_%288079444645%29.jpg/150px-Caspian_Plover_%28Charadrius_asiaticus%29_%288079444645%29.jpg",
  },
  {
    id: 103,
    name: "czajka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kiebitz_050424ausschnitt.jpg/150px-Kiebitz_050424ausschnitt.jpg",
  },
  {
    id: 104,
    name: "czajka szponiasta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Spur-winged_Lapwing_%28Vanellus_spinosus%29_%2821152292885%29.jpg/150px-Spur-winged_Lapwing_%28Vanellus_spinosus%29_%2821152292885%29.jpg",
  },
  {
    id: 105,
    name: "czajka towarzyska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sociable_Lapwing.jpg/150px-Sociable_Lapwing.jpg",
  },
  {
    id: 106,
    name: "czajka stepowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Weissschwanzkiebitz.jpg/150px-Weissschwanzkiebitz.jpg",
  },
  {
    id: 107,
    name: "kulik mniejszy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Whimbrel_Numenius_phaeopus.jpg/150px-Whimbrel_Numenius_phaeopus.jpg",
  },
  {
    id: 108,
    name: "kulik cienkodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Numenius_tenuirostris.jpg/150px-Numenius_tenuirostris.jpg",
  },
  {
    id: 109,
    name: "kulik wielki",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Numenius_arquata_Reculver.jpg/150px-Numenius_arquata_Reculver.jpg",
  },
  {
    id: 110,
    name: "szlamnik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Limosa_lapponica1.jpg/150px-Limosa_lapponica1.jpg",
  },
  {
    id: 111,
    name: "rycyk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Limosa_limosa_%28Uitkerke%29.jpg/150px-Limosa_limosa_%28Uitkerke%29.jpg",
  },
  {
    id: 112,
    name: "kamusznik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Arenaria_interpres_%28habitus%29.jpg/150px-Arenaria_interpres_%28habitus%29.jpg",
  },
  {
    id: 113,
    name: "biegus wielki",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Great_Knot_scarboro_.sep02.jpg/150px-Great_Knot_scarboro_.sep02.jpg",
  },
  {
    id: 114,
    name: "biegus rdzawy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Calidris-canutus.jpg/150px-Calidris-canutus.jpg",
  },
  {
    id: 115,
    name: "batalion",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Kampfl%C3%A4ufer_Gefieder_putzend.jpg/150px-Kampfl%C3%A4ufer_Gefieder_putzend.jpg",
  },
  {
    id: 116,
    name: "biegus płaskodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Limicola_falcinellus.jpg/150px-Limicola_falcinellus.jpg",
  },
  {
    id: 117,
    name: "biegus krzywodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Calidris_ferruginea_%28Marek_Szczepanek%29.jpg/150px-Calidris_ferruginea_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 118,
    name: "biegus mały",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Temminck%27s_Stint_%28Non-_breeding_plumage%29_I_IMG_1477.jpg/150px-Temminck%27s_Stint_%28Non-_breeding_plumage%29_I_IMG_1477.jpg",
  },
  {
    id: 119,
    name: "piaskowiec",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Calidris-alba-001.jpg/150px-Calidris-alba-001.jpg",
  },
  {
    id: 120,
    name: "biegus zmienny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Calidris_alpina_01.jpg/150px-Calidris_alpina_01.jpg",
  },
  {
    id: 121,
    name: "biegus morski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Purple_Sandpiper_winter.jpg/150px-Purple_Sandpiper_winter.jpg",
  },
  {
    id: 122,
    name: "biegus długoskrzydły",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Calidris_bairdii_-Gullbringusysla%2C_Iceland-8.jpg/150px-Calidris_bairdii_-Gullbringusysla%2C_Iceland-8.jpg",
  },
  {
    id: 123,
    name: "biegus malutki",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Little-Stint.jpg/150px-Little-Stint.jpg",
  },
  {
    id: 124,
    name: "biegus karłowaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Least_Sandpiper.jpg/150px-Least_Sandpiper.jpg",
  },
  {
    id: 125,
    name: "biegus białorzytny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/White-rumped_Sandpiper.jpg/150px-White-rumped_Sandpiper.jpg",
  },
  {
    id: 126,
    name: "biegus płowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Buff-breasted_Sandpiper.jpg/150px-Buff-breasted_Sandpiper.jpg",
  },
  {
    id: 127,
    name: "biegus arktyczny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pectoral_Sandpiper3.jpg/150px-Pectoral_Sandpiper3.jpg",
  },
  {
    id: 128,
    name: "biegus tundrowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Calidris-pusilla-001.jpg/150px-Calidris-pusilla-001.jpg",
  },
  {
    id: 129,
    name: "szlamiec długodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Limnodromus_scolopaceus.jpg/150px-Limnodromus_scolopaceus.jpg",
  },
  {
    id: 130,
    name: "słonka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Woodcock_earthworm.jpg/150px-Woodcock_earthworm.jpg",
  },
  {
    id: 131,
    name: "dubelt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Gallinago_media.jpg/150px-Gallinago_media.jpg",
  },
  {
    id: 132,
    name: "bekas kszyk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gallinago_gallinago_1_%28Marek_Szczepanek%29.jpg/150px-Gallinago_gallinago_1_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 133,
    name: "bekasik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lymnocryptes_minimus_%28Marek_Szczepanek%29.jpg/150px-Lymnocryptes_minimus_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 134,
    name: "terekia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Xenus_cinereus_%28restig%29.jpg/150px-Xenus_cinereus_%28restig%29.jpg",
  },
  {
    id: 135,
    name: "brodziec piskliwy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Actitis_hypoleucos_1_tb_%28Marek_Szczepanek%29.jpg/150px-Actitis_hypoleucos_1_tb_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 136,
    name: "brodziec plamisty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Actitis-macularia-005.jpg/150px-Actitis-macularia-005.jpg",
  },
  {
    id: 137,
    name: "samotnik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tringa_ochropus_1_%28Marek_Szczepanek%29.jpg/150px-Tringa_ochropus_1_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 138,
    name: "brodziec żółtonogi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Lesser_Yellowlegs.jpg/150px-Lesser_Yellowlegs.jpg",
  },
  {
    id: 139,
    name: "brodziec śniady",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dunkler_Wasserlaeufer1.JPG/150px-Dunkler_Wasserlaeufer1.JPG",
  },
  {
    id: 140,
    name: "kwokacz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Gr%C3%BCnschenkel_Tringa_nebularia.jpg/150px-Gr%C3%BCnschenkel_Tringa_nebularia.jpg",
  },
  {
    id: 141,
    name: "brodziec piegowaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/GreaterYellowlegs23.jpg/150px-GreaterYellowlegs23.jpg",
  },
  {
    id: 142,
    name: "krwawodziób",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Common_Redshank_Tringa_totanus.jpg/150px-Common_Redshank_Tringa_totanus.jpg",
  },
  {
    id: 143,
    name: "łęczak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wood_Sandpiper_%28Non-breeding%29_near_Hodal_I_IMG_9633.jpg/150px-Wood_Sandpiper_%28Non-breeding%29_near_Hodal_I_IMG_9633.jpg",
  },
  {
    id: 144,
    name: "brodziec pławny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tringa_stagnatilis.jpg/150px-Tringa_stagnatilis.jpg",
  },
  {
    id: 145,
    name: "płatkonóg szydłodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Phalaropus_lobatus.jpg/150px-Phalaropus_lobatus.jpg",
  },
  {
    id: 146,
    name: "płatkonóg płaskodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Phalaropus_fulicaria1.jpg/150px-Phalaropus_fulicaria1.jpg",
  },
  {
    id: 147,
    name: "żwirowiec łąkowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Glareola_pratincola01.jpg/150px-Glareola_pratincola01.jpg",
  },
  {
    id: 148,
    name: "żwirowiec stepowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Glareola_nordmanni.jpg/150px-Glareola_nordmanni.jpg",
  },
  {
    id: 149,
    name: "maskonur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Papageitaucher_Fratercula_arctica.jpg/150px-Papageitaucher_Fratercula_arctica.jpg",
  },
  {
    id: 150,
    name: "nurnik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tystie1.jpg/150px-Tystie1.jpg",
  },
  {
    id: 151,
    name: "alka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Razorbill_iceland.JPG/150px-Razorbill_iceland.JPG",
  },
  {
    id: 152,
    name: "alczyk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/AlleAlle_2.jpg/150px-AlleAlle_2.jpg",
  },
  {
    id: 153,
    name: "nurzyk polarny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Uria_lomvia5.jpg/150px-Uria_lomvia5.jpg",
  },
  {
    id: 154,
    name: "nurzyk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Uria_aalge6.jpg/150px-Uria_aalge6.jpg",
  },
  {
    id: 155,
    name: "wydrzyk długosterny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Long-tailed_Skua_%28js%29_26.jpg/150px-Long-tailed_Skua_%28js%29_26.jpg",
  },
  {
    id: 156,
    name: "wydrzyk ostrosterny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Schmarotzer2.jpg/150px-Schmarotzer2.jpg",
  },
  {
    id: 157,
    name: "wydrzyk tęposterny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Stercorarius_pomarinusPCCA20070623-3985B.jpg/150px-Stercorarius_pomarinusPCCA20070623-3985B.jpg",
  },
  {
    id: 158,
    name: "wydrzyk wielki",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Skua_Runde2.jpg/150px-Skua_Runde2.jpg",
  },
  {
    id: 159,
    name: "mewa modrodzioba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pagophila_eburnea-USFWS.jpg/150px-Pagophila_eburnea-USFWS.jpg",
  },
  {
    id: 160,
    name: "mewa obrożna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/XemaSabini.jpg/150px-XemaSabini.jpg",
  },
  {
    id: 161,
    name: "mewa trójpalczasta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Bulbjerg_rider.jpg/150px-Bulbjerg_rider.jpg",
  },
  {
    id: 162,
    name: "mewa cienkodzioba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Larus_genei.jpg/150px-Larus_genei.jpg",
  },
  {
    id: 163,
    name: "mewa śmieszka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Laughlock.jpg/150px-Laughlock.jpg",
  },
  {
    id: 164,
    name: "mewa mała",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Littlegull75.jpg/150px-Littlegull75.jpg",
  },
  {
    id: 165,
    name: "mewa różowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ross%27s_Gull_%28Rhodostethia_rosea%29.jpg/150px-Ross%27s_Gull_%28Rhodostethia_rosea%29.jpg",
  },
  {
    id: 166,
    name: "mewa karaibska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Laughing_gull_-_natures_pics.jpg/150px-Laughing_gull_-_natures_pics.jpg",
  },
  {
    id: 167,
    name: "mewa śródziemnomorska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Korallenm%C3%B6we.jpg/150px-Korallenm%C3%B6we.jpg",
  },
  {
    id: 168,
    name: "mewa czarnogłowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Larus_melanocephalus_aka_Mediterranean_Gull_rare_guest_in_Sweden2.jpg/150px-Larus_melanocephalus_aka_Mediterranean_Gull_rare_guest_in_Sweden2.jpg",
  },
  {
    id: 169,
    name: "mewa orlica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Larus_ichthyaetus.jpg/150px-Larus_ichthyaetus.jpg",
  },
  {
    id: 170,
    name: "mewa siwa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sturmm%C3%B6we_-_Auenlandschaft_Hohenrode_HA_222_Landkreis_Schaumburg.jpg/150px-Sturmm%C3%B6we_-_Auenlandschaft_Hohenrode_HA_222_Landkreis_Schaumburg.jpg",
  },
  {
    id: 171,
    name: "mewa delawarska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Delaw.jpg/150px-Delaw.jpg",
  },
  {
    id: 172,
    name: "mewa żółtonoga",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Larus-fuscus-graellsii-He.jpg/150px-Larus-fuscus-graellsii-He.jpg",
  },
  {
    id: 173,
    name: "mewa srebrzysta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Larus_argentatus_argenteus01.jpg/150px-Larus_argentatus_argenteus01.jpg",
  },
  {
    id: 174,
    name: "mewa popielata",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/American_Herring_Gull_-_natures_pics.jpg/150px-American_Herring_Gull_-_natures_pics.jpg",
  },
  {
    id: 175,
    name: "mewa romańska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2004-04-10_Larus_michahellis_ad.jpg/150px-2004-04-10_Larus_michahellis_ad.jpg",
  },
  {
    id: 176,
    name: "mewa białogłowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Larus_cachinnans_3_%28Marek_Szczepanek%29.jpg/150px-Larus_cachinnans_3_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 177,
    name: "mewa blada",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Larus_hyperboreus-USFWS.jpg/150px-Larus_hyperboreus-USFWS.jpg",
  },
  {
    id: 178,
    name: "mewa polarna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Larus-glaucoides-002.jpg/150px-Larus-glaucoides-002.jpg",
  },
  {
    id: 179,
    name: "mewa ochocka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ooseguro-kamome.jpg/150px-Ooseguro-kamome.jpg",
  },
  {
    id: 180,
    name: "mewa siodłata",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Great_Black-backed_Gull.jpg/150px-Great_Black-backed_Gull.jpg",
  },
  {
    id: 181,
    name: "rybitwa krótkodzioba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Gelochelidon_nilotica_1.jpg/150px-Gelochelidon_nilotica_1.jpg",
  },
  {
    id: 182,
    name: "rybitwa wielkodzioba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sterna-caspia-010.jpg/150px-Sterna-caspia-010.jpg",
  },
  {
    id: 183,
    name: "rybitwa czubata",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/2021-07-10_Thalasseus_sandvicensis%2C_St_Marys_Island%2C_Northumberland_06.jpg/150px-2021-07-10_Thalasseus_sandvicensis%2C_St_Marys_Island%2C_Northumberland_06.jpg",
  },
  {
    id: 184,
    name: "rybitwa różowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2021-07-10_Sterna_dougallii%2C_St_Marys_Island%2C_Northumberland_22.jpg/150px-2021-07-10_Sterna_dougallii%2C_St_Marys_Island%2C_Northumberland_22.jpg",
  },
  {
    id: 185,
    name: "rybitwa rzeczna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Sterna_hirundo_-_Common_Tern.jpg/150px-Sterna_hirundo_-_Common_Tern.jpg",
  },
  {
    id: 186,
    name: "rybitwa popielata",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sterna_paradisaea-Norderoog.jpg/150px-Sterna_paradisaea-Norderoog.jpg",
  },
  {
    id: 187,
    name: "rybitwa białoczelna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Koajisashi_05a2432s.jpg/150px-Koajisashi_05a2432s.jpg",
  },
  {
    id: 188,
    name: "rybitwa białowąsa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Chlidonias_hybrida_3_%28Marek_Szczepanek%29.jpg/150px-Chlidonias_hybrida_3_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 189,
    name: "rybitwa czarna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chlidonias_niger.jpg/150px-Chlidonias_niger.jpg",
  },
  {
    id: 190,
    name: "rybitwa białoskrzydła",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/ChlidoniasLeucopterus.jpg/150px-ChlidoniasLeucopterus.jpg",
  },
  {
    id: 191,
    name: "nur rdzawoszyi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Juvenile_red_throated_diver.jpg/150px-Juvenile_red_throated_diver.jpg",
  },
  { id: 192, name: "nur czarnoszyi", image: "https:" },
  { id: 193, name: "nur pacyficzny", image: "https:" },
  {
    id: 194,
    name: "nur lodowiec",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Common_Loon_with_chick.jpg/150px-Common_Loon_with_chick.jpg",
  },
  {
    id: 195,
    name: "nur białodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Great_Northern_Loon_%28Gavia_immer%29.jpg/150px-Great_Northern_Loon_%28Gavia_immer%29.jpg",
  },
  {
    id: 196,
    name: "oceannik żółtopłetwy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Oceanites_oceanicusPCCA20070623-3634B.jpg/150px-Oceanites_oceanicusPCCA20070623-3634B.jpg",
  },
  {
    id: 197,
    name: "nawałnik burzowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Hydrobates_pelagicus.jpg/150px-Hydrobates_pelagicus.jpg",
  },
  {
    id: 198,
    name: "nawałnik duży",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Lesp1.jpg/150px-Lesp1.jpg",
  },
  {
    id: 199,
    name: "fulmar zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Eissturmvogel02.jpg/150px-Eissturmvogel02.jpg",
  },
  {
    id: 200,
    name: "burzyk żółtodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cagarra_Selvagem_Pequena.jpg/150px-Cagarra_Selvagem_Pequena.jpg",
  },
  {
    id: 201,
    name: "burzyk szary",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sooty_Shearwater.jpg/150px-Sooty_Shearwater.jpg",
  },
  {
    id: 202,
    name: "burzyk północny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Puffinus_puffinus_-Iceland_-flying-6.jpg/150px-Puffinus_puffinus_-Iceland_-flying-6.jpg",
  },
  {
    id: 203,
    name: "burzyk balearski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Puffinus_mauretanicus.jpg/150px-Puffinus_mauretanicus.jpg",
  },
  {
    id: 204,
    name: "bocian czarny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Blackstorksmall.JPG/150px-Blackstorksmall.JPG",
  },
  {
    id: 205,
    name: "bocian biały",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ciconia_ciconia_01.JPG/150px-Ciconia_ciconia_01.JPG",
  },
  {
    id: 206,
    name: "pelikan różowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/150px-Pelikan_Walvis_Bay.jpg",
  },
  {
    id: 207,
    name: "pelikan kędzierzawy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/ComputerHotline_-_Pelecanus_crispus_%28by%29_%281%29.jpg/150px-ComputerHotline_-_Pelecanus_crispus_%28by%29_%281%29.jpg",
  },
  {
    id: 208,
    name: "bąk zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Botaurus_stellaris_%28Marek_Szczepanek%29.jpg/150px-Botaurus_stellaris_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 209,
    name: "bączek zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Ixobrychus_minutus_3_%28Marek_Szczepanek%29.jpg/150px-Ixobrychus_minutus_3_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 210,
    name: "ślepowron zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nycticorax_nycticorax1.jpg/150px-Nycticorax_nycticorax1.jpg",
  },
  {
    id: 211,
    name: "czapla modronosa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Flickr_-_Rainbirder_-_Squacco_Heron_%28Ardeola_ralloides%29.jpg/150px-Flickr_-_Rainbirder_-_Squacco_Heron_%28Ardeola_ralloides%29.jpg",
  },
  {
    id: 212,
    name: "czapla złotawa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Red-flush_Cattle_Egret.jpg/150px-Red-flush_Cattle_Egret.jpg",
  },
  {
    id: 213,
    name: "czapla siwa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bird01.jpg/150px-Bird01.jpg",
  },
  {
    id: 214,
    name: "czapla purpurowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Purple_Heron_%28Ardea_purpurea%29_in_Kolkata_W_IMG_3352.jpg/150px-Purple_Heron_%28Ardea_purpurea%29_in_Kolkata_W_IMG_3352.jpg",
  },
  {
    id: 215,
    name: "czapla biała",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Egretta_alba_2_%28Lukasz_Lukasik%29.jpg/150px-Egretta_alba_2_%28Lukasz_Lukasik%29.jpg",
  },
  {
    id: 216,
    name: "czapla nadobna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Little_Egret_Reflection.jpg/150px-Little_Egret_Reflection.jpg",
  },
  {
    id: 217,
    name: "warzęcha zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Eurasian_Spoonbill.jpg/150px-Eurasian_Spoonbill.jpg",
  },
  {
    id: 218,
    name: "ibis kasztanowaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Glossy_Ibis_RWD.jpg/150px-Glossy_Ibis_RWD.jpg",
  },
  {
    id: 219,
    name: "głuptak zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Northern-Gannet-6.jpg/150px-Northern-Gannet-6.jpg",
  },
  {
    id: 220,
    name: "kormoran mały",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Phalacrocorax_pygmeus_1_%28Martin_Mecnarowski%29.jpg/150px-Phalacrocorax_pygmeus_1_%28Martin_Mecnarowski%29.jpg",
  },
  {
    id: 221,
    name: "kormoran czubaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Shag_Phalacrocorax_aristotelis.jpg/150px-Shag_Phalacrocorax_aristotelis.jpg",
  },
  {
    id: 222,
    name: "kormoran zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Phalacrocorax_carbo_Vic.jpg/150px-Phalacrocorax_carbo_Vic.jpg",
  },
  {
    id: 223,
    name: "rybołów",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Osprey_mg_9605.jpg/150px-Osprey_mg_9605.jpg",
  },
  {
    id: 224,
    name: "kaniuk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Black-shouldered_Kite_%28Elanus_caeruleus%29_in_Kawal_WS%2C_AP_W_IMG_1681.jpg/150px-Black-shouldered_Kite_%28Elanus_caeruleus%29_in_Kawal_WS%2C_AP_W_IMG_1681.jpg",
  },
  {
    id: 225,
    name: "trzmielojad",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pernis_apivorus2.jpg/150px-Pernis_apivorus2.jpg",
  },
  {
    id: 226,
    name: "orłosęp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bartgeier_Gypaetus_barbatus_front_Richard_Bartz.jpg/150px-Bartgeier_Gypaetus_barbatus_front_Richard_Bartz.jpg",
  },
  {
    id: 227,
    name: "ścierwnik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Egyptian_vulture.jpg/150px-Egyptian_vulture.jpg",
  },
  {
    id: 228,
    name: "gadożer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Circaetus_gallicus_02.jpg/150px-Circaetus_gallicus_02.jpg",
  },
  {
    id: 229,
    name: "sęp płowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gyps-fulvus.jpg/150px-Gyps-fulvus.jpg",
  },
  {
    id: 230,
    name: "sęp kasztanowaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cinereous.vulture1.jpg/150px-Cinereous.vulture1.jpg",
  },
  {
    id: 231,
    name: "orlik krzykliwy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Aquila_pomarina_orlik_krzykliwyAM-crop.jpg/150px-Aquila_pomarina_orlik_krzykliwyAM-crop.jpg",
  },
  {
    id: 232,
    name: "orlik grubodzioby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Great_spotted_Eagle_I2_IMG_8358.jpg/150px-Great_spotted_Eagle_I2_IMG_8358.jpg",
  },
  {
    id: 233,
    name: "orzeł stepowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Steppenadler.jpg/150px-Steppenadler.jpg",
  },
  {
    id: 234,
    name: "orzeł cesarski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Kaiseradler_Aquila_heliaca_2_amk.jpg/150px-Kaiseradler_Aquila_heliaca_2_amk.jpg",
  },
  {
    id: 235,
    name: "orzeł przedni",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Aquila_chrysaetos_Flickr.jpg/150px-Aquila_chrysaetos_Flickr.jpg",
  },
  {
    id: 236,
    name: "orzeł południowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bonelli%27s_Eagle.jpg/150px-Bonelli%27s_Eagle.jpg",
  },
  {
    id: 237,
    name: "orzełek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Booted_Eagle_NAUMANN.jpg/150px-Booted_Eagle_NAUMANN.jpg",
  },
  {
    id: 238,
    name: "błotniak stawowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Circus_aeruginosus_samiec4.jpg/150px-Circus_aeruginosus_samiec4.jpg",
  },
  {
    id: 239,
    name: "błotniak zbożowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Weibliche_Kornweihe_%28circus_cyaneus%29_-_Spiekeroog%2C_Nationalpark_Nieders%C3%A4chsisches_Wattenmeer.jpg/150px-Weibliche_Kornweihe_%28circus_cyaneus%29_-_Spiekeroog%2C_Nationalpark_Nieders%C3%A4chsisches_Wattenmeer.jpg",
  },
  {
    id: 240,
    name: "błotniak stepowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Circus_macrourus.jpg/150px-Circus_macrourus.jpg",
  },
  {
    id: 241,
    name: "błotniak łąkowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Male_monty01.jpg/150px-Male_monty01.jpg",
  },
  {
    id: 242,
    name: "krogulec krótkonogi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Accipiter_brevipes.jpg/150px-Accipiter_brevipes.jpg",
  },
  {
    id: 243,
    name: "krogulec",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Accipiter_nisus_kill.jpg/150px-Accipiter_nisus_kill.jpg",
  },
  {
    id: 244,
    name: "jastrząb",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Northern_Goshawk_ad_M2.jpg/150px-Northern_Goshawk_ad_M2.jpg",
  },
  {
    id: 245,
    name: "bielik wschodni",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pallas%27s_Fish_Eagle_%28_Haliaeetus_leucoryphus%29.jpg/150px-Pallas%27s_Fish_Eagle_%28_Haliaeetus_leucoryphus%29.jpg",
  },
  {
    id: 246,
    name: "bielik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Haliaeetus_albicilla_LC0194.jpg/150px-Haliaeetus_albicilla_LC0194.jpg",
  },
  {
    id: 247,
    name: "kania ruda",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Milvus_milvus_R%28ThKraft%29.jpg/150px-Milvus_milvus_R%28ThKraft%29.jpg",
  },
  {
    id: 248,
    name: "kania czarna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Milvus_migrans_front%28ThKraft%29.jpg/150px-Milvus_migrans_front%28ThKraft%29.jpg",
  },
  {
    id: 249,
    name: "myszołów włochaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Buteo_lagopus_29283.JPG/150px-Buteo_lagopus_29283.JPG",
  },
  {
    id: 250,
    name: "myszołów",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Myszo%C5%82%C3%B3w_Zwyczajny.jpg/150px-Myszo%C5%82%C3%B3w_Zwyczajny.jpg",
  },
  {
    id: 251,
    name: "kurhannik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Adlerbussard.jpg/150px-Adlerbussard.jpg",
  },
  {
    id: 252,
    name: "płomykówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tyto_alba_close_up.jpg/150px-Tyto_alba_close_up.jpg",
  },
  {
    id: 253,
    name: "sowa jarzębata",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Sperbereule1a.jpg/150px-Sperbereule1a.jpg",
  },
  {
    id: 254,
    name: "sóweczka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Glaucidium_passerinum_20110413.jpg/150px-Glaucidium_passerinum_20110413.jpg",
  },
  {
    id: 255,
    name: "pójdźka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Athene_noctua.jpg/150px-Athene_noctua.jpg",
  },
  {
    id: 256,
    name: "włochatka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aegolius-funereus-001.jpg/150px-Aegolius-funereus-001.jpg",
  },
  {
    id: 257,
    name: "syczek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Centro_provinciale_%282%29.jpg/150px-Centro_provinciale_%282%29.jpg",
  },
  {
    id: 258,
    name: "uszatka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Waldohreule_in_freier_Wildbahn.jpg/150px-Waldohreule_in_freier_Wildbahn.jpg",
  },
  {
    id: 259,
    name: "uszatka błotna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Asio_flammeus_-Fazenda_Campo_de_Ouro%2C_Piraju%2C_Sao_Paulo%2C_Brasil-8.jpg/150px-Asio_flammeus_-Fazenda_Campo_de_Ouro%2C_Piraju%2C_Sao_Paulo%2C_Brasil-8.jpg",
  },
  {
    id: 260,
    name: "puszczyk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Strix_aluco_3_%28Martin_Mecnarowski%29.jpg/150px-Strix_aluco_3_%28Martin_Mecnarowski%29.jpg",
  },
  {
    id: 261,
    name: "puszczyk uralski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Strix_uralensis.jpg/150px-Strix_uralensis.jpg",
  },
  {
    id: 262,
    name: "puszczyk mszarny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Strix_nebulosa.jpg/150px-Strix_nebulosa.jpg",
  },
  {
    id: 263,
    name: "puchacz śnieżny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bubo_scandiacus2.jpg/150px-Bubo_scandiacus2.jpg",
  },
  {
    id: 264,
    name: "puchacz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bubo_bubo_winter_1.jpg/150px-Bubo_bubo_winter_1.jpg",
  },
  {
    id: 265,
    name: "dudek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/ABUBILLA_%28Upupa_epops%29.jpg/150px-ABUBILLA_%28Upupa_epops%29.jpg",
  },
  {
    id: 266,
    name: "krętogłów",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/22804_Draaihals_%283318438707%29.jpg/150px-22804_Draaihals_%283318438707%29.jpg",
  },
  {
    id: 267,
    name: "dzięcioł zielonosiwy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Picus_canus.jpg/150px-Picus_canus.jpg",
  },
  {
    id: 268,
    name: "dzięcioł zielony",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/03_vgrue-10-11.jpg/150px-03_vgrue-10-11.jpg",
  },
  {
    id: 269,
    name: "dzięcioł czarny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Schwarzspecht.jpg/150px-Schwarzspecht.jpg",
  },
  {
    id: 270,
    name: "dzięcioł średni",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Dendrocopos_medius_%28Marek_Szczepanek%29_cut.jpg/150px-Dendrocopos_medius_%28Marek_Szczepanek%29_cut.jpg",
  },
  {
    id: 271,
    name: "dzięciołek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dendrocopos_minor_291108.jpg/150px-Dendrocopos_minor_291108.jpg",
  },
  {
    id: 272,
    name: "dzięcioł duży",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Dendrocopos_major_4_%28Marek_Szczepanek%29.jpg/150px-Dendrocopos_major_4_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 273,
    name: "dzięcioł białoszyi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Syrian-Woodpecker-20051218m023.jpg/150px-Syrian-Woodpecker-20051218m023.jpg",
  },
  {
    id: 274,
    name: "dzięcioł białogrzbiety",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Dendrocopos_leucotos.jpg/150px-Dendrocopos_leucotos.jpg",
  },
  {
    id: 275,
    name: "dzięcioł trójpalczasty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Picoides_tridactylus_NAUMANN.jpg/150px-Picoides_tridactylus_NAUMANN.jpg",
  },
  {
    id: 276,
    name: "żołna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%C5%9Eahl%C3%BBr-33.jpg/150px-%C5%9Eahl%C3%BBr-33.jpg",
  },
  {
    id: 277,
    name: "kraska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/European_roller.jpg/150px-European_roller.jpg",
  },
  {
    id: 278,
    name: "zimorodek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alcedo_atthis-8b.jpg/150px-Alcedo_atthis-8b.jpg",
  },
  {
    id: 279,
    name: "rybaczek srokaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ceryle_rudis_%28male%29.jpg/150px-Ceryle_rudis_%28male%29.jpg",
  },
  {
    id: 280,
    name: "pustułeczka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/09402_Kleine_Torenvalk_Lesser_Kestrel.jpg/150px-09402_Kleine_Torenvalk_Lesser_Kestrel.jpg",
  },
  {
    id: 281,
    name: "pustułka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Common_kestrel_falco_tinnunculus.jpg/150px-Common_kestrel_falco_tinnunculus.jpg",
  },
  {
    id: 282,
    name: "kobczyk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Falco_vespertinus.jpg/150px-Falco_vespertinus.jpg",
  },
  {
    id: 283,
    name: "drzemlik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Merlin_Falcon_3519308347.jpg/150px-Merlin_Falcon_3519308347.jpg",
  },
  {
    id: 284,
    name: "kobuz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Falco_subbuteo_flying.jpg/150px-Falco_subbuteo_flying.jpg",
  },
  {
    id: 285,
    name: "sokół skalny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Falke_san_telmo.jpg/150px-Falke_san_telmo.jpg",
  },
  {
    id: 286,
    name: "raróg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Falco_cherrug_1_%28Bohu%C5%A1_%C4%8C%C3%AD%C4%8Del%29.jpg/150px-Falco_cherrug_1_%28Bohu%C5%A1_%C4%8C%C3%AD%C4%8Del%29.jpg",
  },
  {
    id: 287,
    name: "raróg górski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Lanner_Falcon_800.jpg/150px-Lanner_Falcon_800.jpg",
  },
  {
    id: 288,
    name: "białozór",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Falco_rusticolus_1.jpg/150px-Falco_rusticolus_1.jpg",
  },
  {
    id: 289,
    name: "sokół wędrowny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Peregrine_Falcon_Kobble_Apr07.JPG/150px-Peregrine_Falcon_Kobble_Apr07.JPG",
  },
  {
    id: 290,
    name: "wireonek czerwonooki",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Redeyedvireo2.jpg/150px-Redeyedvireo2.jpg",
  },
  {
    id: 291,
    name: "wilga zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Oriolus_oriolus_Warsaw.jpg/150px-Oriolus_oriolus_Warsaw.jpg",
  },
  {
    id: 292,
    name: "gąsiorek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Neuntoeter.JPG/150px-Neuntoeter.JPG",
  },
  {
    id: 293,
    name: "dzierzba rdzawosterna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/0T4A6719.jpg/150px-0T4A6719.jpg",
  },
  {
    id: 294,
    name: "dzierzba pustynna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lanius_isabellinus1.jpg/150px-Lanius_isabellinus1.jpg",
  },
  {
    id: 295,
    name: "dzierzba czarnoczelna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Schwarzstirnwuerger.jpg/150px-Schwarzstirnwuerger.jpg",
  },
  {
    id: 296,
    name: "srokosz północny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Northern_Shrike%2C_Elwha_River_Mouth%2C_Port_Angeles%2C_WA.jpg/150px-Northern_Shrike%2C_Elwha_River_Mouth%2C_Port_Angeles%2C_WA.jpg",
  },
  {
    id: 297,
    name: "srokosz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lanius_excubitor_1_%28Marek_Szczepanek%29.jpg/150px-Lanius_excubitor_1_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 298,
    name: "dzierzba rudogłowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Lanius_senator.jpg/150px-Lanius_senator.jpg",
  },
  {
    id: 299,
    name: "wieszczek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Alpendohle.jpg/150px-Alpendohle.jpg",
  },
  {
    id: 300,
    name: "sójka syberyjska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Perisoreus_infaustus2.jpg/150px-Perisoreus_infaustus2.jpg",
  },
  {
    id: 301,
    name: "sójka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Garrulus_glandarius_1_Luc_Viatour.jpg/150px-Garrulus_glandarius_1_Luc_Viatour.jpg",
  },
  {
    id: 302,
    name: "sroka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Korean_magpie_in_Daejeon_facing_away.jpg/150px-Korean_magpie_in_Daejeon_facing_away.jpg",
  },
  {
    id: 303,
    name: "orzechówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Spotted_Nutcracker.jpg/150px-Spotted_Nutcracker.jpg",
  },
  {
    id: 304,
    name: "kawka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Corvus_monedula_-Netherlands-8-2c.jpg/150px-Corvus_monedula_-Netherlands-8-2c.jpg",
  },
  {
    id: 305,
    name: "gawron",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Corvus_frugilegus_2.jpg/150px-Corvus_frugilegus_2.jpg",
  },
  {
    id: 306,
    name: "kruk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Common_raven_by_David_Hofmann.jpg/150px-Common_raven_by_David_Hofmann.jpg",
  },
  {
    id: 307,
    name: "czarnowron",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Wikikraai.jpg/150px-Wikikraai.jpg",
  },
  {
    id: 308,
    name: "wrona siwa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Hooded_Crow_%28Corvus_cornix%29_%2811%29.jpg/150px-Hooded_Crow_%28Corvus_cornix%29_%2811%29.jpg",
  },
  {
    id: 309,
    name: "sosnówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Parus_ater01.jpg/150px-Parus_ater01.jpg",
  },
  {
    id: 310,
    name: "czubatka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lophophanes_cristatus_Luc_Viatour_2.jpg/150px-Lophophanes_cristatus_Luc_Viatour_2.jpg",
  },
  {
    id: 311,
    name: "sikora uboga",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sumpfmeise1.jpg/150px-Sumpfmeise1.jpg",
  },
  {
    id: 312,
    name: "czarnogłówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Poecile_Montanus_Kittila_20120307.JPG/150px-Poecile_Montanus_Kittila_20120307.JPG",
  },
  {
    id: 313,
    name: "modraszka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/ParusCaeruleus.jpg/150px-ParusCaeruleus.jpg",
  },
  {
    id: 314,
    name: "sikora lazurowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Azure_Tit_-_Parus_cyanus.jpg/150px-Azure_Tit_-_Parus_cyanus.jpg",
  },
  {
    id: 315,
    name: "bogatka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Parus_major_m.jpg/150px-Parus_major_m.jpg",
  },
  {
    id: 316,
    name: "remiz zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Remiz_pendulinus_1_%28Martin_Mecnarowski%29.jpg/150px-Remiz_pendulinus_1_%28Martin_Mecnarowski%29.jpg",
  },
  {
    id: 317,
    name: "lerka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lullula_arborea_%28Rodrigo_de_Almeida%29.jpg/150px-Lullula_arborea_%28Rodrigo_de_Almeida%29.jpg",
  },
  {
    id: 318,
    name: "skowronek białoskrzydły",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Melanocorypha_leucoptera2.jpg/150px-Melanocorypha_leucoptera2.jpg",
  },
  {
    id: 319,
    name: "skowronek zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alauda_arvensis_2.jpg/150px-Alauda_arvensis_2.jpg",
  },
  {
    id: 320,
    name: "dzierlatka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cotovia-de-poupa.jpg/150px-Cotovia-de-poupa.jpg",
  },
  {
    id: 321,
    name: "górniczek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Eremophila_alpestris2.jpg/150px-Eremophila_alpestris2.jpg",
  },
  {
    id: 322,
    name: "skowrończyk krótkopalcowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Alondra.jpg/150px-Alondra.jpg",
  },
  {
    id: 323,
    name: "kalandra dwuplamista",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Melanocorypha_bimaculata.jpg/150px-Melanocorypha_bimaculata.jpg",
  },
  {
    id: 324,
    name: "kalandra szara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bere%C5%9Fe.jpg/150px-Bere%C5%9Fe.jpg",
  },
  {
    id: 325,
    name: "kalandra czarna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Zwarte_leeuwerik.jpg/150px-Zwarte_leeuwerik.jpg",
  },
  {
    id: 326,
    name: "skowrończyk mały",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Terrera_marisme%C3%B1a_%28Calandrella_rufescens%29_%288649673388%29_%282%29_%28cropped%29.jpg/150px-Terrera_marisme%C3%B1a_%28Calandrella_rufescens%29_%288649673388%29_%282%29_%28cropped%29.jpg",
  },
  {
    id: 327,
    name: "wąsatka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Bartmeise%28Cropped%29_by_Wolfram_Riech.jpg/150px-Bartmeise%28Cropped%29_by_Wolfram_Riech.jpg",
  },
  {
    id: 328,
    name: "świerszczak melodyjny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Rusty-rumped_Warbler_%28Locustella_certhiola%29_I_IMG_2750.jpg/150px-Rusty-rumped_Warbler_%28Locustella_certhiola%29_I_IMG_2750.jpg",
  },
  {
    id: 329,
    name: "brzęczka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Locustellaluscinioides.jpg/150px-Locustellaluscinioides.jpg",
  },
  {
    id: 330,
    name: "strumieniówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flodsangare.jpg/150px-Flodsangare.jpg",
  },
  {
    id: 331,
    name: "świerszczak zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Grashoppsangare-070512.jpg/150px-Grashoppsangare-070512.jpg",
  },
  {
    id: 332,
    name: "zaganiacz mały",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Booted_Warbler_%28Iduna_caligata%29_%E0%B4%9A%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%BB%E0%B4%AD%E0%B5%87%E0%B4%B0%E0%B4%BF_%2832246872555%29.jpg/150px-Booted_Warbler_%28Iduna_caligata%29_%E0%B4%9A%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%BB%E0%B4%AD%E0%B5%87%E0%B4%B0%E0%B4%BF_%2832246872555%29.jpg",
  },
  {
    id: 333,
    name: "zaganiacz blady",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hippolais_pallida_Akko_Israel_2.jpg/150px-Hippolais_pallida_Akko_Israel_2.jpg",
  },
  {
    id: 334,
    name: "zaganiacz szczebiotliwy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hippolais_polyglotta.jpg/150px-Hippolais_polyglotta.jpg",
  },
  {
    id: 335,
    name: "zaganiacz zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Hippolais_icterina1.jpg/150px-Hippolais_icterina1.jpg",
  },
  {
    id: 336,
    name: "wodniczka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Seggenrohrsaenger_hand.jpg/150px-Seggenrohrsaenger_hand.jpg",
  },
  {
    id: 337,
    name: "tamaryszka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Acrocephalus_melanopogon_ad03_CB.jpg/150px-Acrocephalus_melanopogon_ad03_CB.jpg",
  },
  {
    id: 338,
    name: "rokitniczka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Acrocephalus_schoenobaenus_1_%28Marek_Szczepanek%29-2.jpg/150px-Acrocephalus_schoenobaenus_1_%28Marek_Szczepanek%29-2.jpg",
  },
  {
    id: 339,
    name: "zaroślówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Blyth%27s_Reed_Warbler.jpg/150px-Blyth%27s_Reed_Warbler.jpg",
  },
  {
    id: 340,
    name: "łozówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Acrocephalus_palustris_%28Marek_Szczepanek%29.jpg/150px-Acrocephalus_palustris_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 341,
    name: "trzcinniczek zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4566.reed_warbler_holding_food.jpg/150px-4566.reed_warbler_holding_food.jpg",
  },
  {
    id: 342,
    name: "trzcinniczek kaspijski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Paddyfield_Warbler_%28Acrocephalus_agricola%29_in_Kolkata_Im_IMG_0496.jpg/150px-Paddyfield_Warbler_%28Acrocephalus_agricola%29_in_Kolkata_Im_IMG_0496.jpg",
  },
  {
    id: 343,
    name: "trzciniak zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Acrocephalus_arundinaceus_%28Marek_Szczepanek%29.jpg/150px-Acrocephalus_arundinaceus_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 344,
    name: "jaskółka oknówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Delichon_urbica_NRM.jpg/150px-Delichon_urbica_NRM.jpg",
  },
  {
    id: 345,
    name: "jaskółka rudawa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Red-rumped_Swallow_%28Hirundo_daurica%29_in_Anantgiri%2C_AP_W_IMG_8735.jpg/150px-Red-rumped_Swallow_%28Hirundo_daurica%29_in_Anantgiri%2C_AP_W_IMG_8735.jpg",
  },
  {
    id: 346,
    name: "jaskółka dymówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Landsvale.jpg/150px-Landsvale.jpg",
  },
  {
    id: 347,
    name: "jaskółka brzegówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sand-Martin2.jpg/150px-Sand-Martin2.jpg",
  },
  {
    id: 348,
    name: "świstunka górska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Phylloscopus_bonelli.jpg/150px-Phylloscopus_bonelli.jpg",
  },
  {
    id: 349,
    name: "świstunka leśna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Phylloscopus_sibilatrix_Barco_Reale_1.jpg/150px-Phylloscopus_sibilatrix_Barco_Reale_1.jpg",
  },
  {
    id: 350,
    name: "świstunka żółtawa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Phylloscopus_inornatus_%28Yellow-browed_Warbler%29.jpg/150px-Phylloscopus_inornatus_%28Yellow-browed_Warbler%29.jpg",
  },
  {
    id: 351,
    name: "świstunka ałtajska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Hume%27s_Warbler_I2_IMG_3401.jpg/150px-Hume%27s_Warbler_I2_IMG_3401.jpg",
  },
  {
    id: 352,
    name: "świstunka złotawa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/20070304%E8%B4%B5%E9%98%B3-%E9%BB%84%E8%85%B0%E6%9F%B3%E8%8E%BA.jpg/150px-20070304%E8%B4%B5%E9%98%B3-%E9%BB%84%E8%85%B0%E6%9F%B3%E8%8E%BA.jpg",
  },
  {
    id: 353,
    name: "świstunka brunatna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Phylloscopus_fuscatus.jpg/150px-Phylloscopus_fuscatus.jpg",
  },
  {
    id: 354,
    name: "piecuszek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Willow_warbler_UK09.JPG/150px-Willow_warbler_UK09.JPG",
  },
  {
    id: 355,
    name: "świstunka iberyjska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Phylloscopus_ibericus.jpg/150px-Phylloscopus_ibericus.jpg",
  },
  {
    id: 356,
    name: "pierwiosnek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Phylloscopus_collybita_%28taxobox%29.jpg/150px-Phylloscopus_collybita_%28taxobox%29.jpg",
  },
  {
    id: 357,
    name: "świstunka grubodzioba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Radde%27s_Warbler_%28Phylloscopus_schwarzi%29.jpg/150px-Radde%27s_Warbler_%28Phylloscopus_schwarzi%29.jpg",
  },
  {
    id: 358,
    name: "wójcik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Greenish_Warbler_I_IMG_0565.jpg/150px-Greenish_Warbler_I_IMG_0565.jpg",
  },
  {
    id: 359,
    name: "świstunka północna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Phylloscopus_borealis_P4274142.jpg/150px-Phylloscopus_borealis_P4274142.jpg",
  },
  {
    id: 360,
    name: "raniuszek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Long-tailed_Tit_Aegithalos_caudatus.jpg/150px-Long-tailed_Tit_Aegithalos_caudatus.jpg",
  },
  {
    id: 361,
    name: "kapturka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Sylvia_atricapilla_male_2.jpg/150px-Sylvia_atricapilla_male_2.jpg",
  },
  {
    id: 362,
    name: "gajówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sylvia_borin_%28%C3%96rebro_County%29.jpg/150px-Sylvia_borin_%28%C3%96rebro_County%29.jpg",
  },
  {
    id: 363,
    name: "jarzębatka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sylvia_nisoria.jpg/150px-Sylvia_nisoria.jpg",
  },
  {
    id: 364,
    name: "piegża zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/LBT120%28loz%29.jpg/150px-LBT120%28loz%29.jpg",
  },
  {
    id: 365,
    name: "pokrzewka wąsata",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Western_Subalpine_Warbler_Sylvia_inornata%2C_Aiguamolls_de_l%27Empord%C3%A0.jpg/150px-Western_Subalpine_Warbler_Sylvia_inornata%2C_Aiguamolls_de_l%27Empord%C3%A0.jpg",
  },
  {
    id: 366,
    name: "pokrzewka iberyjska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subalpine_Warbler_-_Monfrague_-_Spain_2669_%2819110069408%29.jpg/150px-Subalpine_Warbler_-_Monfrague_-_Spain_2669_%2819110069408%29.jpg",
  },
  {
    id: 367,
    name: "pokrzewka aksamitna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Samtkopf-Grasm%C3%BCcke.jpg/150px-Samtkopf-Grasm%C3%BCcke.jpg",
  },
  {
    id: 368,
    name: "cierniówka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tallareta_vulgar_01_%28Sylvia_communis%29.jpg/150px-Tallareta_vulgar_01_%28Sylvia_communis%29.jpg",
  },
  {
    id: 369,
    name: "mysikrólik zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Regulus_regulus_-Vendee%2C_France-8.jpg/150px-Regulus_regulus_-Vendee%2C_France-8.jpg",
  },
  {
    id: 370,
    name: "zniczek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Regulus_ignicapillus2.jpg/150px-Regulus_ignicapillus2.jpg",
  },
  {
    id: 371,
    name: "jemiołuszka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bohemian_Wax_Wing.jpg/150px-Bohemian_Wax_Wing.jpg",
  },
  {
    id: 372,
    name: "kowalik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sitta_europaea_Luc_Viatour.jpg/150px-Sitta_europaea_Luc_Viatour.jpg",
  },
  {
    id: 373,
    name: "pełzacz leśny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Certhia_familiaris_-climbing_tree-8_%28cropped_version%29.jpg/150px-Certhia_familiaris_-climbing_tree-8_%28cropped_version%29.jpg",
  },
  {
    id: 374,
    name: "pełzacz ogrodowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Short-toed_Treecreeper_%28Certhia_brachydactyla%29_%28cropped_version%29.jpg/150px-Short-toed_Treecreeper_%28Certhia_brachydactyla%29_%28cropped_version%29.jpg",
  },
  {
    id: 375,
    name: "pomurnik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tichodroma_muraria_NAUMANN.jpg/150px-Tichodroma_muraria_NAUMANN.jpg",
  },
  {
    id: 376,
    name: "strzyżyk zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Zaunkoenig-photo.jpg/150px-Zaunkoenig-photo.jpg",
  },
  {
    id: 377,
    name: "szpak zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Colourful_starling.jpeg/150px-Colourful_starling.jpeg",
  },
  {
    id: 378,
    name: "pasterz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rosy_Starling_with_Brahminy_Starling_I3m_IMG_9806.jpg/150px-Rosy_Starling_with_Brahminy_Starling_I3m_IMG_9806.jpg",
  },
  {
    id: 379,
    name: "pluszcz zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cinclus_cinclus_-Scotland-4-4c.jpg/150px-Cinclus_cinclus_-Scotland-4-4c.jpg",
  },
  {
    id: 380,
    name: "muchołówka szara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/SpottedFlycatcheronfence.jpg/150px-SpottedFlycatcheronfence.jpg",
  },
  {
    id: 381,
    name: "rudzik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Erithacus-rubecula-melophilus_Dublin-Ireland.jpg/150px-Erithacus-rubecula-melophilus_Dublin-Ireland.jpg",
  },
  {
    id: 382,
    name: "słowik syberyjski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Luscinia_sibilans_-_Khao_Yai.jpg/150px-Luscinia_sibilans_-_Khao_Yai.jpg",
  },
  {
    id: 383,
    name: "słowik rdzawy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Luscinia_megarhynchos_Istria_01.jpg/150px-Luscinia_megarhynchos_Istria_01.jpg",
  },
  {
    id: 384,
    name: "słowik szary",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Thrush_Nightingale_by_Daniel_Bastaja.jpg/150px-Thrush_Nightingale_by_Daniel_Bastaja.jpg",
  },
  {
    id: 385,
    name: "podróżniczek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Luscinia_svecica_volgae.jpg/150px-Luscinia_svecica_volgae.jpg",
  },
  {
    id: 386,
    name: "modraczek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tarsiger_cyanurus_-Japan-8.jpg/150px-Tarsiger_cyanurus_-Japan-8.jpg",
  },
  {
    id: 387,
    name: "muchołówka mała",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ficedula_parva.jpg/150px-Ficedula_parva.jpg",
  },
  {
    id: 388,
    name: "muchołówka żałobna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Trauerschn%C3%A4pper_auf_Esche_cutted.jpg/150px-Trauerschn%C3%A4pper_auf_Esche_cutted.jpg",
  },
  {
    id: 389,
    name: "muchołówka białoszyja",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mucho%C5%82%C3%B3wka_bia%C5%82oszyja_%28samiec%29.jpg/150px-Mucho%C5%82%C3%B3wka_bia%C5%82oszyja_%28samiec%29.jpg",
  },
  {
    id: 390,
    name: "pleszka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Phoenicurus_phoenicurus_male%28js%29.jpg/150px-Phoenicurus_phoenicurus_male%28js%29.jpg",
  },
  {
    id: 391,
    name: "kopciuszek zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Phoenicurus_ochruros_female.jpg/150px-Phoenicurus_ochruros_female.jpg",
  },
  {
    id: 392,
    name: "nagórnik zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Monticola_saxatilis_NAUMANN.jpg/150px-Monticola_saxatilis_NAUMANN.jpg",
  },
  {
    id: 393,
    name: "pokląskwa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Saxicola_rubetra_2_tom_%28Marek_Szczepanek%29.jpg/150px-Saxicola_rubetra_2_tom_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 394,
    name: "kląskawka syberyjska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Common_Stonechat_I_-Haryana_IMG_9865.jpg/150px-Common_Stonechat_I_-Haryana_IMG_9865.jpg",
  },
  {
    id: 395,
    name: "kląskawka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Malestonechatseaham.JPG/150px-Malestonechatseaham.JPG",
  },
  {
    id: 396,
    name: "białorzytka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Oenanthe_oenanthe_01_II.jpg/150px-Oenanthe_oenanthe_01_II.jpg",
  },
  {
    id: 397,
    name: "białorzytka płowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Isabelline_wheatear_%28Oenanthe_isabellina%29_male%2C_non-breeding.jpg/150px-Isabelline_wheatear_%28Oenanthe_isabellina%29_male%2C_non-breeding.jpg",
  },
  {
    id: 398,
    name: "białorzytka pustynna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Oenanthe_deserti2.jpg/150px-Oenanthe_deserti2.jpg",
  },
  {
    id: 399,
    name: "białorzytka pstra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oenanthe_pleschanka.jpg/150px-Oenanthe_pleschanka.jpg",
  },
  {
    id: 400,
    name: "białorzytka saharyjska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Saharasteinschmaetzer.jpg/150px-Saharasteinschmaetzer.jpg",
  },
  {
    id: 401,
    name: "drozdoń tajgowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Toratsugumi_05z5249a.jpg/150px-Toratsugumi_05z5249a.jpg",
  },
  {
    id: 402,
    name: "drozdaczek ciemny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Turdus_sibiricus.jpg/150px-Turdus_sibiricus.jpg",
  },
  {
    id: 403,
    name: "paszkot",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Turdus_viscivorus_1.jpg/150px-Turdus_viscivorus_1.jpg",
  },
  {
    id: 404,
    name: "drozd śpiewak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Song_Thrush_Turdus_philomelos.jpg/150px-Song_Thrush_Turdus_philomelos.jpg",
  },
  {
    id: 405,
    name: "droździk",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Redwing_Turdus_iliacus.jpg/150px-Redwing_Turdus_iliacus.jpg",
  },
  {
    id: 406,
    name: "kos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kos_Turdus_merulaRB.jpg/150px-Kos_Turdus_merulaRB.jpg",
  },
  {
    id: 407,
    name: "drozd oliwkowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Eyebrowed_Thrush.jpg/150px-Eyebrowed_Thrush.jpg",
  },
  {
    id: 408,
    name: "kwiczoł",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Turdus_pilaris2.jpg/150px-Turdus_pilaris2.jpg",
  },
  {
    id: 409,
    name: "drozd obrożny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Turdus_torquatus2.jpg/150px-Turdus_torquatus2.jpg",
  },
  {
    id: 410,
    name: "drozd rdzawy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Turdus_naumanni_naumanni.jpg/150px-Turdus_naumanni_naumanni.jpg",
  },
  {
    id: 411,
    name: "drozd rdzawoskrzydły",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tsugumi1.JPG/150px-Tsugumi1.JPG",
  },
  {
    id: 412,
    name: "drozd czarnogardły",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/A_dark-throated_Thrush_female_-_Dhanachuli%2C_Uttarakhand_India.jpg/150px-A_dark-throated_Thrush_female_-_Dhanachuli%2C_Uttarakhand_India.jpg",
  },
  {
    id: 413,
    name: "drozd rdzawogardły",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Dark_Throated_Thrush_in_Temple_of_Heaven.JPG/150px-Dark_Throated_Thrush_in_Temple_of_Heaven.JPG",
  },
  {
    id: 414,
    name: "płochacz halny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Prunella_collaris_Pyrenees.jpg/150px-Prunella_collaris_Pyrenees.jpg",
  },
  {
    id: 415,
    name: "płochacz syberyjski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Siberian_Accentor_%28Prunella_montanella%29_-_%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D0%B8%D0%B9%D0%BD_%D1%85%D0%B0%D0%B9%D1%80%D1%83%D1%83%D0%BB%D0%B4%D0%B0%D0%B9_%2816435139700%29.jpg/150px-Siberian_Accentor_%28Prunella_montanella%29_-_%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D0%B8%D0%B9%D0%BD_%D1%85%D0%B0%D0%B9%D1%80%D1%83%D1%83%D0%BB%D0%B4%D0%B0%D0%B9_%2816435139700%29.jpg",
  },
  {
    id: 416,
    name: "płochacz czarnogardły",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Black-throated_Accentor_-_Kazakistan_S4E3967_%2817037004490%29-cropped.jpg/150px-Black-throated_Accentor_-_Kazakistan_S4E3967_%2817037004490%29-cropped.jpg",
  },
  {
    id: 417,
    name: "płochacz pokrzywnica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dunnock.jpg/150px-Dunnock.jpg",
  },
  {
    id: 418,
    name: "wróbel zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Passer_domesticus3.jpg/150px-Passer_domesticus3.jpg",
  },
  {
    id: 419,
    name: "mazurek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tree-Sparrow-2009-16-02.jpg/150px-Tree-Sparrow-2009-16-02.jpg",
  },
  {
    id: 420,
    name: "wróbel skalny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Petronia_petronia_Martien_Brand.jpg/150px-Petronia_petronia_Martien_Brand.jpg",
  },
  {
    id: 421,
    name: "śnieżka zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Snowfinch.jpg/150px-Snowfinch.jpg",
  },
  {
    id: 422,
    name: "świergotek drzewny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Anthus_triviallis_%28Marek_Szczepanek%29.jpg/150px-Anthus_triviallis_%28Marek_Szczepanek%29.jpg",
  },
  {
    id: 423,
    name: "świergotek tajgowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Olive_backed_Pipit.jpg/150px-Olive_backed_Pipit.jpg",
  },
  {
    id: 424,
    name: "świergotek rdzawogardły",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Red-throated_Pipit_%28Anthus_cervinus%29.jpg/150px-Red-throated_Pipit_%28Anthus_cervinus%29.jpg",
  },
  {
    id: 425,
    name: "świergotek łąkowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Meadow-Pipit.jpg/150px-Meadow-Pipit.jpg",
  },
  {
    id: 426,
    name: "siwerniak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Anthus_spinoletta.jpg/150px-Anthus_spinoletta.jpg",
  },
  {
    id: 427,
    name: "świergotek nadmorski",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Faroe_Island.1.bird.jpg/150px-Faroe_Island.1.bird.jpg",
  },
  {
    id: 428,
    name: "świergotek szponiasty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Richard%27s_Pipit_I_-Haryana_IMG_9961.jpg/150px-Richard%27s_Pipit_I_-Haryana_IMG_9961.jpg",
  },
  {
    id: 429,
    name: "świergotek stepowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Blyth%27s_Pipit_Pangolakha_Wildlife_Sanctuary_East_Sikkim_05.05.2016.jpg/150px-Blyth%27s_Pipit_Pangolakha_Wildlife_Sanctuary_East_Sikkim_05.05.2016.jpg",
  },
  {
    id: 430,
    name: "świergotek polny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/AnthusCampestris_cropped.jpg/150px-AnthusCampestris_cropped.jpg",
  },
  {
    id: 431,
    name: "pliszka żółta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Motacilla_flava_in_Belarus.jpg/150px-Motacilla_flava_in_Belarus.jpg",
  },
  { id: 432, name: "pliszka syberyjska", image: "https:" },
  {
    id: 433,
    name: "pliszka górska",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Grey_Wagtail_%28Breeding_female%29_I_IMG_3079.jpg/150px-Grey_Wagtail_%28Breeding_female%29_I_IMG_3079.jpg",
  },
  {
    id: 434,
    name: "pliszka cytrynowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Citrine_wagtail_I_IMG_8326.jpg/150px-Citrine_wagtail_I_IMG_8326.jpg",
  },
  {
    id: 435,
    name: "pliszka siwa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/White-Wagtail.jpg/150px-White-Wagtail.jpg",
  },
  {
    id: 436,
    name: "zięba zwyczajna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Kikilis.jpg/150px-Kikilis.jpg",
  },
  {
    id: 437,
    name: "jer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bjorkefink_0003.jpg/150px-Bjorkefink_0003.jpg",
  },
  {
    id: 438,
    name: "grubodziób",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Grubodzi%C3%B3b_Zwyczajny.jpg/150px-Grubodzi%C3%B3b_Zwyczajny.jpg",
  },
  {
    id: 439,
    name: "dziwonia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Carpodacus_erythrinus_20060623.jpg/150px-Carpodacus_erythrinus_20060623.jpg",
  },
  {
    id: 440,
    name: "łuskowiec",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pinicola-enucleator-001B.jpg/150px-Pinicola-enucleator-001B.jpg",
  },
  {
    id: 441,
    name: "gil zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Dompap.jpg/150px-Dompap.jpg",
  },
  {
    id: 442,
    name: "gilak pustynny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bucanetes_githagineus%2C_Gran_Canaria_2.jpg/150px-Bucanetes_githagineus%2C_Gran_Canaria_2.jpg",
  },
  {
    id: 443,
    name: "dzwoniec",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/European_Greenfinch_male_female.jpg/150px-European_Greenfinch_male_female.jpg",
  },
  {
    id: 444,
    name: "makolągwa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Makol%C4%85gwa.jpg/150px-Makol%C4%85gwa.jpg",
  },
  {
    id: 445,
    name: "rzepołuch",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Carduelis_flavirostris.jpg/150px-Carduelis_flavirostris.jpg",
  },
  {
    id: 446,
    name: "czeczotka brązowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Carduelis_cabaret1.jpg/150px-Carduelis_cabaret1.jpg",
  },
  {
    id: 447,
    name: "czeczotka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Acanthis_flammea%2C_Kotka%2C_Finland_3.jpg/150px-Acanthis_flammea%2C_Kotka%2C_Finland_3.jpg",
  },
  {
    id: 448,
    name: "czeczotka tundrowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Carduelis_hornemanni_CT3.jpg/150px-Carduelis_hornemanni_CT3.jpg",
  },
  {
    id: 449,
    name: "krzyżodziób sosnowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Loxia_pytyopsittacus%2C_male.jpg/150px-Loxia_pytyopsittacus%2C_male.jpg",
  },
  {
    id: 450,
    name: "krzyżodziób świerkowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Red_Crossbills_%28Male%29.jpg/150px-Red_Crossbills_%28Male%29.jpg",
  },
  {
    id: 451,
    name: "krzyżodziób modrzewiowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Whitewingedcrossbillmale09.jpg/150px-Whitewingedcrossbillmale09.jpg",
  },
  {
    id: 452,
    name: "szczygieł",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Carduelis_carduelis_%28Lukasz_Lukasik%29.jpg/150px-Carduelis_carduelis_%28Lukasz_Lukasik%29.jpg",
  },
  {
    id: 453,
    name: "osetnik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Carduelis_citrinella_-Plateau_de_Beille%2C_Ariege%2C_Midi-Pyrenee%2C_France-8_%282%29.jpg/150px-Carduelis_citrinella_-Plateau_de_Beille%2C_Ariege%2C_Midi-Pyrenee%2C_France-8_%282%29.jpg",
  },
  {
    id: 454,
    name: "kulczyk zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Girlitz.jpg/150px-Girlitz.jpg",
  },
  {
    id: 455,
    name: "czyż",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Carduelis_spinus_2_%28Martin_Mecnarowski%29.jpg/150px-Carduelis_spinus_2_%28Martin_Mecnarowski%29.jpg",
  },
  {
    id: 456,
    name: "poświerka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Laplandbunting67.jpg/150px-Laplandbunting67.jpg",
  },
  {
    id: 457,
    name: "śnieguła",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Plectrophenax_nivalis1.jpg/150px-Plectrophenax_nivalis1.jpg",
  },
  {
    id: 458,
    name: "potrzeszcz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/CornBunting02.jpg/150px-CornBunting02.jpg",
  },
  {
    id: 459,
    name: "trznadel zwyczajny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Yellowhammer_3.jpg/150px-Yellowhammer_3.jpg",
  },
  {
    id: 460,
    name: "trznadel białogłowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Emberiza_leucocephalos_NAUMANN.jpg/150px-Emberiza_leucocephalos_NAUMANN.jpg",
  },
  {
    id: 461,
    name: "głuszek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Emberiza_cia.jpg/150px-Emberiza_cia.jpg",
  },
  {
    id: 462,
    name: "ortolan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Hortol%C3%A0_01_Emberiza_hortulana%29.jpg/150px-Hortol%C3%A0_01_Emberiza_hortulana%29.jpg",
  },
  {
    id: 463,
    name: "cierlik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Emberiza_cirlus_closeup.jpg/150px-Emberiza_cirlus_closeup.jpg",
  },
  {
    id: 464,
    name: "trznadelek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Littlebunt79.jpg/150px-Littlebunt79.jpg",
  },
  {
    id: 465,
    name: "trznadel złotobrewy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Yellow-browed_bunting_%28Emberiza_chrysophrys%29_Eocheong_Island_Korea_2012.jpg/150px-Yellow-browed_bunting_%28Emberiza_chrysophrys%29_Eocheong_Island_Korea_2012.jpg",
  },
  {
    id: 466,
    name: "trznadel czubaty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Emberiza_rustica2.jpg/150px-Emberiza_rustica2.jpg",
  },
  {
    id: 467,
    name: "trznadel złotawy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/EmberizaAureolaM.jpg/150px-EmberizaAureolaM.jpg",
  },
  {
    id: 468,
    name: "trznadel czarnogłowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/28-090504-black-headed-bunting-at-first-layby.jpg/150px-28-090504-black-headed-bunting-at-first-layby.jpg",
  },
  {
    id: 469,
    name: "trznadel rudogłowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Red-headed_Bunting_-_Uzbekistan_S4E8550_%2822764709123%29.jpg/150px-Red-headed_Bunting_-_Uzbekistan_S4E8550_%2822764709123%29.jpg",
  },
  {
    id: 470,
    name: "trznadel szarogłowy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Black_Face_%2816077787174%29.jpg/150px-Black_Face_%2816077787174%29.jpg",
  },
  {
    id: 471,
    name: "potrzos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Reed_Bunting_male_and_female.jpg/150px-Reed_Bunting_male_and_female.jpg",
  },
  {
    id: 472,
    name: "junko",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Junco_hyemalis_hyemalis-001.jpg/150px-Junco_hyemalis_hyemalis-001.jpg",
  },
  {
    id: 473,
    name: "bagiennik żółtobrewy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Passerculus_sandwichensis_crop.jpg/150px-Passerculus_sandwichensis_crop.jpg",
  },
];

export function getBirds(): Bird[] {
  return birds;
}

export function getRandomBird(): Bird {
  return birds[Math.floor(Math.random() * birds.length)];
}

export function getRandomAnswers(bird: Bird): string[] {
  const answers = birds.map((b) => b.name).filter((name) => name !== bird.name);
  let randomizeArray = [...answers].sort(() => 0.5 - Math.random()).slice(0, 3);
  randomizeArray.push(bird.name);
  randomizeArray = [...randomizeArray].sort(() => 0.5 - Math.random());

  return randomizeArray;
}

export function getQuestion(): Question {
  const bird = getRandomBird();
  const answers = getRandomAnswers(bird);

  return {
    bird: bird,
    answers: answers,
  };
}

export function saveScores(score: Score): void {
  localStorage.setItem("poznaj_ptaki.highScore", JSON.stringify(score));
}

export function loadScores(): Score {
  const score = localStorage.getItem("poznaj_ptaki.highScore");
  if (score) {
    return JSON.parse(score);
  }

  return {
    score: 0,
    highestScore: 0,
    previousScore: 0,
  };
}
