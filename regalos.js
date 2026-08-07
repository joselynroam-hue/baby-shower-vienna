const regalos = [
  {
    "nombre": "Carricoche",
    "precio": "Aprox. 360€",
    "enlace": "https://www.amazon.es/Maxi-cosi-zelia-trio-Cochecito-piezas/dp/B09KS5HT2R/ref=pd_ci_mcx_mh_mcx_views_0_image?pd_rd_w=8F5hi&content-id=amzn1.sym.07405f39-1b17-41f7-be38-e0e8f7dfeba9%3Aamzn1.symc.30e3dbb4-8dd8-4bad-b7a1-a45bcdbc49b8&pf_rd_p=07405f39-1b17-41f7-be38-e0e8f7dfeba9&pf_rd_r=DZKX81YF8EPE7TVW2GK5&pd_rd_wg=M1Orh&pd_rd_r=6cfe9490-7c43-4da4-99e1-0f17c0ba71cc&pd_rd_i=B09KS5HT2R&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Silla de coche",
    "precio": "Aprox. 382€",
    "enlace": "https://www.amazon.es/Maxi-Cosi-giratoria-posiciones-reclinaci%C3%B3n-Protecci%C3%B3n/dp/B0CWS19269/ref=pd_ci_mcx_mh_mcx_views_0_image?pd_rd_w=OrWY1&content-id=amzn1.sym.07405f39-1b17-41f7-be38-e0e8f7dfeba9%3Aamzn1.symc.30e3dbb4-8dd8-4bad-b7a1-a45bcdbc49b8&pf_rd_p=07405f39-1b17-41f7-be38-e0e8f7dfeba9&pf_rd_r=VAF2CYQNJPNW707TA235&pd_rd_wg=RfkYf&pd_rd_r=a85a02db-8e39-4e53-a4ac-cfc29e60d8ea&pd_rd_i=B0CWRZDY72https%3A%2F%2Fwww.amazon.es%2FBraun-Aspirador-congesti%C3%B3n-lavavajillas-BNA050EU%2Fdp%2FB09DPS4HTB&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Manta polar",
    "precio": "Aprox. 8€",
    "enlace": "https://www2.hm.com/es_es/productpage.1263042007.html?srsltid=AfmBOortyUwjiRsQjTRXohkUZYZf92n7FUnOhXK6-y_dhwtTRPpbP97xfv4",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Manta para bebé en punto",
    "precio": "Aprox. 15€",
    "enlace": "https://www2.hm.com/es_es/productpage.1332628004.html",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Colchón cuna 60cm x 120 cm",
    "precio": "Aprox. 69€",
    "enlace": "https://www.pikolin.com/es/colchones/colchon-de-cuna-de-pikolin-baby-de-10-cm-baby-pro-cp06100?m=60x120&utm_source=google&utm_medium=cpc&utm_source_platform=Google+Ads&utm_campaign=pikolin_es_shop_goo_gen&utm_id=22734287711&utm_content=179568495777&gad_source=1&gad_campaignid=22734287711&gbraid=0AAAAADp30dwN0ROffrO_b-gtGDrUpiMOD&gclid=Cj0KCQjwm8bTBhDWARIsAC9Hi8kxAyuU_QHCrVig6e30KQ6ZLnilgxXh19P4CxJgrJqML0U0X7FTEO8aAkWXEALw_wcB",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Sábanas",
    "precio": "Aprox. 19€",
    "enlace": "https://www.amazon.es/Ajustable-Encimera-Almohada-Transpirables-Chupetero/dp/B088QGYJQ3/ref=asc_df_B088QGYJQ3?mcid=6107bff135db332392c4b356a07bcb14&tag=googshopes-21&linkCode=df0&hvadid=699771132625&hvpos=&hvnetw=g&hvrand=286600159487609558&hvpone=&hvptwo=&hvqmt=&hvdev=t&hvdvcmdl=&hvlocint=&hvlocphy=9232921&hvtargid=pla-923508183734&hvocijid=286600159487609558-B088QGYJQ3-&hvexpln=0&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Protector impermeable",
    "precio": "Aprox. 9€",
    "enlace": "https://www.amazon.es/Protector-Impermeable-Instalar-Transpirable-Certificada/dp/B0CZ9MHPP1/ref=sr_1_5?adgrpid=81118431789&dib=eyJ2IjoiMSJ9.6A1bvCnWllVPXC-KWF15bnVfwwjaxHlxXLGEmrT0XbXJH1RmuVfEu4goHOyPeI5SYuFk_SfNmy44aH5l_pYmB3HpAe6v4nS7oMIWZOCEkr-NuT7EaMscDMBvHHlhcqCgwfaOqoO_Fdrke1bH5QPpwponGafarZyNhqdPIb-sBEQqe5ch42h3fqeGwmpVdYPTyNDoS6XDfTOTUR8pu7n_x165c1WG24djIv3evNEPyeQaGuYK1TVWcuqRupSVUigf34t0htxBBHBAs5gqTfvSHb5NhSWDY20SBDjIi7B1qB0.U7Xljx_msmfYNtZre-QDxnjN-vcqgaWkiippm6FRxWU&dib_tag=se&hvadid=393624362828&hvdev=t&hvexpln=0&hvlocphy=9232921&hvnetw=g&hvocijid=225084431663826429--&hvqmt=e&hvrand=225084431663826429&hvtargid=kwd-421547624637&hydadcr=22466_1808432&keywords=protector%2Bimpermeable%2Bcuna%2B120x60&mcid=0c9cbe4cc2003ce49b7f6d9475efa2fa&qid=1785873992&s=baby&sr=1-5&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Saco de dormir",
    "precio": "Aprox. 20€",
    "enlace": "https://www.kiabi.es/saco-de-dormir-acolchado-sin-mangas-tog-2-rosa_P826963C1010956?utm_adgroup=&utm_adgroupid=&utm_campaign=ES+-+PM+-+Babies+-+ADA004&utm_campaignid=22559279206&utm_medium=cpc&utm_source=google&utm_term=&gclsrc=aw.ds&gad_source=1&gad_campaignid=22559310436&gbraid=0AAAAADv-Xb3tyuYNJKaI22ZQ3jU18tn2I&gclid=Cj0KCQjwm8bTBhDWARIsAC9Hi8l82xtik1nsH-2mrPtgBqlO9mxQmayVqWuGepKOYBsnOZiDCY7p3SAaAip1EALw_wcB",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Manta de algodón ",
    "precio": "Aprox. 20€",
    "enlace": "https://www2.hm.com/es_es/productpage.1233485007.html",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Cojín de lactancia",
    "precio": "Aprox. 22€",
    "enlace": "https://www.amazon.es/INTERBABY-Coj%C3%ADn-Lactancia-Star-Gris/dp/B0757ZNYDL/ref=sr_1_16?adgrpid=70196027518&dib=eyJ2IjoiMSJ9.RvjX_tlxcgyLDgpjCaB7wQ1k90ikRKyXf1UZHsYeX4R_OG-yJtNA8m7gJBURXs7C7uaxbcv1B3CGCc_Vgs9UVr5hFcK2s41QsGP9D7NNNT8bFjY0F5feGvbdOrlv_CnebKmxRRWRNU838QMVjl-tRgD4_T_Y2ODUNEtS_RpfKpwZDz0aC35_m--O5MyGUz_7lsXxpZGFDiHMN4dEq5EDlTHfoVl8BBT1uDWZ9ITUb_zqgNA3AtdgqRtVa8uS1_GEvma0fDjCCpqCKrmKn35M7nXvVvCYPF2b5gr3qpLwagw.1GXmKlVJ7oFNmp73LIczs8WyxfiORTn7-KvvIKpQf94&dib_tag=se&hvadid=343265861706&hvdev=t&hvexpln=0&hvlocphy=9232921&hvnetw=g&hvocijid=18070129360511732853--&hvqmt=e&hvrand=18070129360511732853&hvtargid=kwd-3874795662&hydadcr=28686_1779760&keywords=cojin%2Blactancia&mcid=2ca3e3e0d7c839a0ada5537338062ba4&qid=1785875755&sr=8-16&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Sacaleches eléctrico manos libres",
    "precio": "Aprox. 38€",
    "enlace": "https://www.amazon.es/FUNYKICH-Sacaleches-El%C3%A9ctrico-Extractor-Monitoreo/dp/B0GFWH3L73/ref=sr_1_51?dib=eyJ2IjoiMSJ9.aazzyRLUt6Nw-nU7lamu6HOJZspQLyiKY0XHbYQkRgpnI1Lw2GfSZJVNP3F2gLU9JDMVBr2aMaqRt9MqviJoFgVNdIDfoWF1q90Swwmxng_mK4j_UKNrnVhUtZF3o5-reQngWcJWhgJDkcuK5hkYY5yvRxfZF0cujuB0FbY6sNf8s7qdI-K6qplN2Mt1t3PlW8jweYB_iilz80Y7TsNepZD1T31KYxDKI3Aet4NtLEASBsME8XWbOeZSRTooDjtzZT0vdGL_ZJKVyT9o9RW-spTKtf-Lh3hab1en3UNSy6s.0aDuLlb7tkAD4SgWUvcPJPw4iIJvejZYYuQSZxWAuPY&dib_tag=se&keywords=sacaleches&qid=1785875511&sr=8-51&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Discos absorbentes",
    "precio": "Aprox. 8€",
    "enlace": "https://www.amazon.es/Philips-Avent-SCF254-61-absorbentes/dp/B0788CC2Y1/ref=sr_1_4?crid=3O4OREI67DVSO&dib=eyJ2IjoiMSJ9.-Nf3Zg8MF4trnx33SIhZYnhouE_GC2fwMl7eqNlpoCKbCAmfF-BVeN825JrszsFrgtlKJznp1QxOmvmZeWFyi89Syk8ZHkrRTWgsvNHyxSMXZD3YGJiQtJAEqbB29Pzq9Tckvx0x36f9xyE56hubOYwETzlYz7aPbGtWmMfeePKRIar9VJtO38HnZZi51-R7gkEJO7Y3GZhwUb9vgNzspzukHzwpbBJ38xrHirmI7YWRf3csWmhrcV7b68RLBKpzMF1fqgXsS0x-aPNMaXtnDDfblPKmFPKMWbvbStt3tbY.xrg5_ZzQ1JEwGTRQpztnqHH2GlCm6MpJlqnQwyejt6M&dib_tag=se&keywords=discos%2Blactancia&qid=1785875976&rdc=1&sprefix=Disc%2Caps%2C643&sr=8-4&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Bolsas para leche",
    "precio": "Aprox. 16€",
    "enlace": "https://www.amazon.es/Medela-conservaci%C3%B3n-desechables-antifugas-protecci%C3%B3n/dp/B0D97R57G3/ref=sr_1_4_sspa?adgrpid=55619918345&dib=eyJ2IjoiMSJ9.wvMYGhscsyCUvCVbHJ5vGnJNIrgol7PyqwK5Avw8sFDCSRUDFZHwVS10Dr4LA6dcaSfJ5_yuVwP8MDQ4jI-9nR7k1UWARL6mBR_fn0_ZRoeZOSPXzIVOqHUtebODIMhNWAZxIty1rMj0SPVEwxm2_HpeFo2MO2hBPhlJpgljloxxGXzAMU-caXvR6oN21nNM4BZi4kA-0l60ss59TuqKqoVEq7EVVIMvaDG1Dfz8mHJGXonmhFaR1UyiMGwsWS-VRfTIocp6mOuES4Xp0AK3oKprKHFprAtK9KrWYtQ95_c.bKqdCYPVQOhQZrPvUEGXkjaATJsXZS2YjFhwNMiXnX0&dib_tag=se&hvadid=275343755883&hvdev=t&hvexpln=0&hvlocphy=9232921&hvnetw=g&hvocijid=4316003127533025265--&hvqmt=e&hvrand=4316003127533025265&hvtargid=kwd-318106444009&hydadcr=14558_1815328&keywords=bolsas%2Bde%2Blactancia&mcid=405625712675369b9cdc3b18fe7f80cc&qid=1785876053&sr=8-4-spons&aref=T1HqnFgQnO&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Biberones",
    "precio": "Aprox. 50€",
    "enlace": "https://www.amazon.es/Philips-Avent-regalo-reci%C3%A9n-nacidos/dp/B0BWFLY8HV/ref=sr_1_1?crid=1M6JJ10JGHJ37&dib=eyJ2IjoiMSJ9.rpm5FSKGl60wLP8FeWdTCvgMrBKiJmbW4JBsMKCAh2tH6SBYI-TAI2sZrK5jT73Xg-sBU8wuz7W3PuS66246mlv1fZwj85Ijjt60MgjOzEtLffqTLWV5p1lD0PkgIHMPt-_clYLyJKVOe2gCurWEOpFFgZq2fo8YolEpJqvXQ8H1GxlbZbaRJdrtZjuanqjPJlcChBrwPkL-jRICN4bOi-wNkA9L8X3A0aL4-K_HrR6mPYnhjToXOQze3g9HKqEHW9huay3eigIMfnO9EqxecEvuEOFiwUllMJmOzCnJ26w.QX1wUScqE5mhHnIc0OolF3hGac6RDwI88OxvkGo-ne8&dib_tag=se&keywords=biberon%2Bphilips%2Bavent&qid=1785875919&sprefix=Bib%2Caps%2C176&sr=8-1&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Escurridor biberones",
    "precio": "Aprox. 15€",
    "enlace": "https://www.amazon.es/Lifewit-Escurridor-Biberones-Accesorios-Sacaleches/dp/B0GFVDCKGD/ref=sr_1_4_sspa?dib=eyJ2IjoiMSJ9.URRoOBEL4ryGiFr9U054IoxTp17ZKKOUMZgEgzFSaZK9rX-BsXZp2SdzaSB5nqg1iUrTdzcao5_eDH2BpFVZF2KFneZ67nD3wqMuudTtJxRMiYqHtkC9zm14N6iLWraNoIWyAp9RwRHu3KkoiG8UmY5-tL9kNeAVIGaRsjVjrZ8dBDj4itR9Z3krlat0nWE9qVVb0pkvT81iJoX9MREZOK-tdY0j9y6jAjy9apLn7spomr80a5c_lyeEySEEksfPXeVo5c-onQ0GkWtzx0HBu5RDHwq9yVeb9wUhwfRozq4.BkpsVKJMlMANugYjtVb44cVpMoDKX-EHQk7EHecyORM&dib_tag=se&keywords=escurridor%2Bde%2Bbiberones&qid=1785876542&sr=8-4-spons&aref=FB4C4UE8FZ&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Muselinas",
    "precio": "Aprox. 10€",
    "enlace": "https://www2.hm.com/es_es/productpage.0946621047.html?utm_source=google&utm_medium=cpc&utm_campaign=&utm_term=&gad_source=1&gad_campaignid=23691047999&gbraid=0AAAAADvrmzTjW9U2zgU42O2rF8Nw_Vn1V&gclid=Cj0KCQjwm8bTBhDWARIsAC9Hi8mIzaoyYcy3onupeMKer1EdfqKL0jSh8yOcQ3q-dN3wuYo0LJrvUuQaAv2lEALw_wcB",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Paños de gasa de algodón ",
    "precio": "Aprox. 11€",
    "enlace": "https://www.amazon.es/Aolso-Muselinas-Cambiador-Absorbente-Multiusos/dp/B0D3XKBMW8/ref=sxin_12_pa_sp_search_thematic_sspa?content-id=amzn1.sym.c440bdbb-c2b3-45ad-9c38-8dfbdda46983%3Aamzn1.sym.c440bdbb-c2b3-45ad-9c38-8dfbdda46983&cv_ct_cx=pa%C3%B1ales%2Bgasa&keywords=pa%C3%B1ales%2Bgasa&pd_rd_i=B0D3XKBMW8&pd_rd_r=1c8fd0b9-8b69-4837-83e6-5ef29410a364&pd_rd_w=J4o6p&pd_rd_wg=FK7H7&pf_rd_p=c440bdbb-c2b3-45ad-9c38-8dfbdda46983&pf_rd_r=1Y0XGXQSFX8P0XGDYCNR&qid=1785876436&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-4-9ac51240-4b88-4e0c-aad1-ad3578b6cab1-spons&aref=jUxMpWZcFr&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Baberos de algodón ",
    "precio": "Aprox. 10€",
    "enlace": "https://www2.hm.com/es_es/productpage.1347681002.html?utm_source=google&utm_medium=cpc&utm_campaign=&utm_term=&gad_source=1&gad_campaignid=23695620385&gbraid=0AAAAADvrmzTWHP6yTMTRqSRcJOHeZRQ9e&gclid=Cj0KCQjwm8bTBhDWARIsAC9Hi8nWGZhIZvu3iijHXX82bv0CNndAHClJ40enM3kjKFOzlcaFZISt6FgaAlJwEALw_wcB",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Set cepillo y peine",
    "precio": "Aprox. 8€",
    "enlace": "https://www.amazon.es/Cepillo-Sistema-almacenamiento-integrado-trasera/dp/B08KFPSRBR/ref=sr_1_16?adgrpid=74880518344&dib=eyJ2IjoiMSJ9.SreYakeeIQ5ANq5rSjdRKVRSTYqSQctXCEJfLWwebLoZ4TkaTB3FR54SwCSjmmMO_zXPaGNQS9abGYt4T-87fNl7lDjjK5sBG04S341Xz-ru_ONfKZBDebeZ_W8HmBSuyWZLJH-2kPMlr8B7G6WW0nguzTfBrprObCLTT0yTrJYWvFiHbn2gD7oaQZmCILYrqI5oBhgtaofQDckG2SaJ870ogc1jHpgI-t0dBeSDYBL-AFQGxDrPY8dKY9PHXXVSE9mIowELWyxAV_6Ho1Wp4u47isrqPcE2oMzf4PH3cj0.nhQXh0j3LhLTh6aS9ZD8lHEQuPO6qdTIsyBsWIaPQf4&dib_tag=se&hvadid=712230816136&hvdev=t&hvexpln=0&hvlocphy=9232921&hvnetw=g&hvocijid=8214117632838598303--&hvqmt=e&hvrand=8214117632838598303&hvtargid=kwd-1159027113346&hydadcr=27413_2406688&keywords=cepillo%2By%2Bpeine%2Bkit%2Bbebe&mcid=9abefcc474fd380ea273152a3acfb5f5&qid=1785877655&sr=8-16&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Toallitas Pure Aqua bebé 1296 und",
    "precio": "Aprox. 47€",
    "enlace": "https://www.amazon.es/Dodot-Toallitas-1-296-restaurar-natural/dp/B0CQM6JWQV/ref=sr_1_48?adgrpid=70649431329&dib=eyJ2IjoiMSJ9.kclpzNCoGPpr5UxIYslMqa0wDUVo8w4l6XLPpQhxJ7o3t6IVsRYvbxs8mkgWr5EiFcwhvDPjUMHkAxPgGCb9E4zlJAMLElQBD_OxyxK6CBKS3qgBjqItO8oUHW8QBOn8BpXr3AILcHEmcRNrQ0_QpTHbiI9PaTefWg_1X53MEDVMsjvdVmSHDZFZQdexf2kmxYFIW34DRDHloNb9HhjLNqTJvGr3XRLqjH-wq7jeIyiSsNrekqWfvCz-5FXuPRgFJITdgs_GgvM3agKQ7DMWtuDMBLBhhjij0ZbL_zyVbmE.BcsAkrgDG3CkylC7YHMpedZmWt6hgeEwv9jGamdfq6E&dib_tag=se&hvadid=712330802609&hvdev=t&hvexpln=0&hvlocphy=9232921&hvnetw=g&hvocijid=12598136088813314310--&hvqmt=b&hvrand=12598136088813314310&hvtargid=kwd-297449741250&hydadcr=28466_2527375&keywords=toallitas+h%C3%BAmedas&mcid=d2dbfd24e72c3cf796d7af7e5dc5ecf3&qid=1785921297&sr=8-48",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Toallitas Pure Aqua bebé 864 und",
    "precio": "Aprox. 38€",
    "enlace": "https://www.amazon.es/gp/aw/d/B0G81B3RRR/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=62dea4303b5da6fd212c9fe7ef3024cd&hsa_cr_id=0&qid=1785921297&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&i=aps&aref=jBt6iieYgw&ref_=sbx__sbtcd_asin_0_img&pd_rd_w=deSA0&content-id=amzn1.sym.97a0ef2a-026f-44ac-bb6e-057fe5018f5e%3Aamzn1.sym.97a0ef2a-026f-44ac-bb6e-057fe5018f5e&pf_rd_p=97a0ef2a-026f-44ac-bb6e-057fe5018f5e&pf_rd_r=KNAD1J1X6MF45Q8566QZ&pd_rd_wg=XNcdP&pd_rd_r=88455689-dfc1-408b-afef-6057848f3e1e&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Canastilla Set para higiene de Baño",
    "precio": "Aprox. 36€",
    "enlace": "https://www.marvimundo.com/mustela-canastilla-set-para-beb-de-cosm-tica-con-productos-imprescindibles-ideal-para-regalar-314433?gad_source=1&gad_campaignid=20265124287&gbraid=0AAAAAC0cCQO3gBUpSyqrm-AHo748bPBoP&gclid=CjwKCAjwvsvTBhBaEiwAmf-3niaYTPrWzGjCv8JJyWEIrAbKONFo-pFV41SWKnUCTHIxfbubBsoplxoCD5YQAvD_BwE",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Termómetro de baño",
    "precio": "Aprox. 7€",
    "enlace": "https://www.amazon.es/Suavinex-Termometro-Ba%C3%B1o-Infantil/dp/B009M4NSGI?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3D4U2ZDPAGR1T",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Bodies 3-6 meses",
    "precio": "Aprox. 16€",
    "enlace": "https://www2.hm.com/es_es/productpage.0814306075.html",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Pijamas de algodón con cremallera",
    "precio": "Aprox. 20€",
    "enlace": "https://www2.hm.com/es_es/productpage.1346286001.html",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Termómetro digital",
    "precio": "Aprox. 10€",
    "enlace": "https://www.amazon.es/SOLMIRA-Term%C3%B3metro-Infrarrojos-Instant%C3%A1nea-Precisi%C3%B3n/dp/B0BMXZQYZW/ref=asc_df_B0BMXZQYZW?mcid=5c27b97a4f93313688b9675c39e4fa86&tag=googshopes-21&linkCode=df0&hvadid=699760474785&hvpos=&hvnetw=g&hvrand=13042862952541749215&hvpone=&hvptwo=&hvqmt=&hvdev=t&hvdvcmdl=&hvlocint=&hvlocphy=9232921&hvtargid=pla-1943520773265&psc=1&hvocijid=13042862952541749215-B0BMXZQYZW-&hvexpln=0",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Aspirador nasal",
    "precio": "Aprox. 10€",
    "enlace": "https://www.amazon.es/Braun-Aspirador-congesti%C3%B3n-lavavajillas-BNA050EU/dp/B09DPS4HTB?pd_rd_w=PvE8X&content-id=amzn1.sym.b81adfe2-eaac-4c2e-a678-07d2f7fdc9fb&pf_rd_p=b81adfe2-eaac-4c2e-a678-07d2f7fdc9fb&pf_rd_r=6QSB4BV3R9X8F8GEZTG1&pd_rd_wg=NOlyF&pd_rd_r=0a5dcf45-0fe1-4cc7-b0c0-6ddb8e7adec7&ref_=sspa_dk_detail_sbt_img_0&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&aref=3cfJh44SUm&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Limpieza de uñas",
    "precio": "Aprox. 10€",
    "enlace": "https://www.amazon.es/Orzbow-Integrado-Recargable-Electrica-Universal/dp/B0DGLJRRN3/ref=sxin_22_sbv_search_btf?adgrpid=63025039096&aref=4U3ootx233&content-id=amzn1.sym.1604ee4a-474d-4d8d-8d20-6b49a44c00b9%3Aamzn1.sym.1604ee4a-474d-4d8d-8d20-6b49a44c00b9&cv_ct_cx=lima%2Bde%2Bu%C3%B1as%2Bde%2Bbebe&hvadid=712330857527&hvdev=t&hvexpln=0&hvlocphy=9232921&hvnetw=g&hvocijid=7978563613929341080--&hvqmt=b&hvrand=7978563613929341080&hvtargid=kwd-935138767367&hydadcr=28440_2527385&keywords=lima%2Bde%2Bu%C3%B1as%2Bde%2Bbebe&mcid=8a9b10445789301bae26ea46a38e4b38&pd_rd_i=B0DGLJRRN3&pd_rd_r=856d5cc8-dd17-4ce8-8393-b6164232841c&pd_rd_w=poKDb&pd_rd_wg=Q3oLU&pf_rd_p=1604ee4a-474d-4d8d-8d20-6b49a44c00b9&pf_rd_r=PKKWHWGZWDY3D595Z8C4&qid=1785876721&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-9131241a-a358-4619-a7b8-0f5a65d91d81&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Cámara de vigilancia bebé",
    "precio": "Aprox. 43€",
    "enlace": "https://www.amazon.es/dp/B0817G6365/?coliid=I2XNURTW7YQRY9&colid=UE7WJ9Q9ORLV&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it_im",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Porteo bebé ",
    "precio": "Aprox. 60€",
    "enlace": "https://es.momcozy.com/products/baby-carrier-khaki-color?&utm_source=google&utm_medium=organic&utm_campaign=Multifeeds-ES-1-260601&utm_content=PureHug%20Baby%20Carrier%20%20-%20Khaki%20Color&currency=EUR&utm_source=google&utm_medium=cpc&utm_campaign=cn:Jiavy-Sale-Pmax-%E6%AC%A7%E6%B4%B2ES-%E5%85%A8%E5%93%81%E7%BA%BF-%E5%91%A8%E4%BF%83+%E5%A4%A7%E4%BF%83-20260610|cid:23931821236&utm_content=l2:|net:x|pl:|agid:|assetgid:6720762841&utm_term=l3:|kw:|mt:|crid:&utm_id=cid:23931821236|srcid:{sourceid}|pid:shopify_es_15358063608179_62788909760883|tgid:&gad_source=1&gad_campaignid=23927285477&gbraid=0AAAABDeftNoKG5a2imSlcqQC9CBzICNN6&gclid=Cj0KCQjwm8bTBhDWARIsAC9Hi8lKGNXrNbT5nGgarXCFOV8GHfisQb5D_ZMeg9vxK7JjktH8wG-FXJgaAnZVEALw_wcB",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Pañales Bebé sensitive Talla 1 224und",
    "precio": "Aprox. 75€",
    "enlace": "https://www.amazon.es/Pa%C3%B1ales-Sensitive-Toallitas-Absorci%C3%B3n-Protecci%C3%B3n/dp/B0976XNCQ5/ref=sr_1_6?adgrpid=70000177128&dib=eyJ2IjoiMSJ9.huszDBajy549IZT6Xf634FHqsi5L51q0H8Ua-5SxcnJazBE9rCU0sJaQ_RbpA5Dkj7Dj-qznkWIO6-YKS9Emy6AxKWZ2xlAQu3HZdJE2UbKymsWbUDQ14kp0V7eg7UKNIFPJFrLpaqD15h6OnNZQN3nDwmcCb6ugsbTIIjTM_CUJTtLPCzVelS17U9fsThZvVxmVvJupqItV_4H6J70bGHi1yMK0KRdLM2jHwaqrgnMXrxkWl0C5qcSrRN_T3DRPGeQKpSMNFT_73IB6rRZ2Y9QGXmjh_O7BRaihAKKEbU4.4Sh2OGRnyHoXP096y3cVPEaICF7ygKBe5ANhOV2Dz08&dib_tag=se&hvadid=601150861828&hvdev=t&hvexpln=0&hvlocphy=9232921&hvnetw=g&hvocijid=11009908748616689661--&hvqmt=e&hvrand=11009908748616689661&hvtargid=kwd-302550888231&hydadcr=18180_2271501&keywords=pa%C3%B1ales&mcid=b66e467fc36135128b9e6811a9ae9f63&qid=1785934059&sr=8-6&th=1",
    "categoria": "Otros",
    "reservado": false
  },
  {
    "nombre": "Pañales Bebé sensitive Talla 2 174nd",
    "precio": "Aprox. 54€",
    "enlace": "https://www.amazon.es/Sensitive-Unidades-Protecci%C3%B3n-Indicador-Dermatol%C3%B3gicamente/dp/B0FLG4Q16W/ref=sr_1_3?adgrpid=56495289592&dib=eyJ2IjoiMSJ9.as22X5OcujZhd0s00TqS0MKZDQ5qZMc8Fkn_J1GOEH2VzUsAbsbPIvgSFBropFcwiYDe_OM64QdLKodp5HcBPHKbx8Z9wA9jQ6aQ2i-T8gk8AcrC9aWXCz7fOAMlJIk0w3xMgv6JQW8_CXQySnjh87s0sdkAkDhFJFPeeZMQV83zHMzGo_vuaMXYtusGWoGiWchFR6sCjcgI5AtwqXGQQBnVl4HWvqFsvhiIrjFcin2B7E29GHf-TxWQslNNMu0-e5b4TDJkSP9-HTiWtb7otPV2ajz3k6VKT4FKmJQt_qU.Z-cX-uJ_OLbBwkTjJb4bKyU7-mncYlIbB2wXa4p30Zw&dib_tag=se&hvadid=601218301640&hvdev=t&hvexpln=0&hvlocphy=9232921&hvnetw=g&hvocijid=1845359705323893730--&hvqmt=e&hvrand=1845359705323893730&hvtargid=kwd-300304846716&hydadcr=22939_2230393&keywords=pa%C3%B1ales+dodot+talla+2&mcid=cef2573f1a81372693a2357e40379c7a&qid=1785940095&sr=8-3",
    "categoria": "Otros",
    "reservado": false
  }
];

