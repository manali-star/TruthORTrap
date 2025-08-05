// Game Data - Questions for each class (5-8) in English and Marathi
const gameData = {
    5: [
        {
            type: "TRAP",
            en: {
                text: "A pop-up says you won a free game! Click to download now.",
                explanation: "This is a trap! Free game offers often contain viruses."
            },
            mr: {
                text: "एक पॉप-अप म्हणतो तुम्ही एक फ्री गेम जिंकला आहे! डाउनलोड करण्यासाठी क्लिक करा.",
                explanation: "हा एक ट्रॅप आहे! फ्री गेम ऑफरमध्ये बर्याचदा व्हायरस असतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "Your teacher sends an email about homework with their correct email address.",
                explanation: "This is truth. Always check the sender's email address."
            },
            mr: {
                text: "तुमच्या टीचरने गृहपाठाबद्दल योग्य ईमेल पत्त्यासह ईमेल पाठवला आहे.",
                explanation: "हे सत्य आहे. पाठवणाऱ्याचा ईमेल पत्ता नेहमी तपासा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website asks for your parents' credit card to verify your age.",
                explanation: "Never share financial information online without parent permission."
            },
            mr: {
                text: "एक वेबसाइट तुमच्या वयाची पडताळणी करण्यासाठी तुमच्या पालकांचा क्रेडिट कार्ड मागते.",
                explanation: "पालकांच्या परवानगीशिवाय ऑनलाईन फायनान्शियल माहिती कधीही शेअर करू नका."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "Your school website has educational games for students.",
                explanation: "School websites are safe sources for learning resources."
            },
            mr: {
                text: "तुमच्या स्कूलच्या वेबसाइटवर विद्यार्थ्यांसाठी एज्युकेशनल गेम्स आहेत.",
                explanation: "स्कूल वेबसाइट्स शिक्षण संसाधनांसाठी सुरक्षित स्त्रोत आहेत."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A stranger online asks for your home address to send a gift.",
                explanation: "Never share personal information with strangers online."
            },
            mr: {
                text: "एक अनोळखी व्यक्ती ऑनलाईन तुमचा घरचा पत्ता गिफ्ट पाठवण्यासाठी मागते.",
                explanation: "ऑनलाईन अनोळखी लोकांसोबत पर्सनल माहिती कधीही शेअर करू नका."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "Your parents help you create a strong password for your account.",
                explanation: "Parents can help create secure online accounts."
            },
            mr: {
                text: "तुमचे पालक तुमच्या अकाउंटसाठी स्ट्राँग पासवर्ड तयार करण्यात मदत करतात.",
                explanation: "पालक सुरक्षित ऑनलाईन अकाउंट्स तयार करण्यात मदत करू शकतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A message says you must forward it to 10 friends or get bad luck.",
                explanation: "This is a chain message scam - never forward such messages."
            },
            mr: {
                text: "एक मेसेज म्हणतो तुम्हाला ते 10 फ्रेंड्सना पाठवावे लागेल नाहीतर वाईट लक मिळेल.",
                explanation: "हा चेन मेसेज स्कॅम आहे - असे मेसेज कधीही फॉरवर्ड करू नका."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You report a mean comment to a trusted adult.",
                explanation: "Always tell an adult about cyberbullying or mean behavior."
            },
            mr: {
                text: "तुम्ही एका विश्वासू प्रौढांना मीन कमेंटबद्दल कळवता.",
                explanation: "सायबरबुलिंग किंवा वाईट वर्तनाबद्दल नेहमी प्रौढांना सांगा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website offers free movie downloads of new releases.",
                explanation: "Downloading copyrighted content illegally is wrong and unsafe."
            },
            mr: {
                text: "एक वेबसाइट नवीन रिलीज झालेल्या मूव्हीची फ्री डाउनलोड ऑफर करते.",
                explanation: "कॉपीराइटेड कंटेंट अवैधपणे डाउनलोड करणे चुकीचे आणि असुरक्षित आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You log out of shared computers after using them.",
                explanation: "Always log out of accounts on shared devices."
            },
            mr: {
                text: "तुम्ही शेअर केलेल्या कॉम्प्युटरवरून वापरून लॉग आउट करता.",
                explanation: "शेअर केलेल्या डिव्हाइसेसवरून नेहमी अकाउंट्समधून लॉग आउट करा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A friend's account sends you a link saying 'You have to see this!'",
                explanation: "Hacked accounts often send malicious links - verify first."
            },
            mr: {
                text: "एका फ्रेंडचा अकाउंट तुम्हाला 'तुम्हाला हे बघितलं पाहिजे!' असे लिंक पाठवतो.",
                explanation: "हॅक केलेले अकाउंट्स मालिशियस लिंक पाठवतात - प्रथम पडताळणी करा."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You ask permission before installing new apps.",
                explanation: "Always check with parents before installing software."
            },
            mr: {
                text: "तुम्ही नवीन ॲप्स इंस्टॉल करण्यापूर्वी परवानगी विचारता.",
                explanation: "सॉफ्टवेअर इंस्टॉल करण्यापूर्वी नेहमी पालकांना विचारा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A quiz asks for your pet's name and your first school.",
                explanation: "These are common security questions - don't share them publicly."
            },
            mr: {
                text: "एक क्विझ तुमच्या पेटचे नाव आणि पहिल्या स्कूलबद्दल विचारते.",
                explanation: "ही सामान्य सिक्युरिटी प्रश्न आहेत - ते पब्लिकली शेअर करू नका."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You use different passwords for different accounts.",
                explanation: "Unique passwords for each account improve security."
            },
            mr: {
                text: "तुम्ही वेगवेगळ्या अकाउंटसाठी वेगवेगळे पासवर्ड वापरता.",
                explanation: "प्रत्येक अकाउंटसाठी युनिक पासवर्ड सुरक्षितता सुधारतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website says your device is infected and offers to clean it.",
                explanation: "This is a common scam to install malware."
            },
            mr: {
                text: "एक वेबसाइट म्हणते तुमचे डिव्हाइस इन्फेक्टेड आहे आणि ते क्लीन करण्याची ऑफर देते.",
                explanation: "मालवेअर इंस्टॉल करण्यासाठी हा एक सामान्य स्कॅम आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You check privacy settings on new social media accounts.",
                explanation: "Reviewing privacy settings helps control who sees your information."
            },
            mr: {
                text: "तुम्ही नवीन सोशल मीडिया अकाउंट्सवर प्रायव्हसी सेटिंग्ज तपासता.",
                explanation: "प्रायव्हसी सेटिंग्जची पुनरावृत्ती केल्याने तुमची माहिती कोण बघू शकतो हे नियंत्रित करण्यास मदत होते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A message claims you won a prize in a contest you never entered.",
                explanation: "Real contests don't contact winners this way - it's a scam."
            },
            mr: {
                text: "एक मेसेज क्लेम करतो तुम्ही कधीही एंटर न केलेल्या कॉन्टेस्टमध्ये प्राइज जिंकला आहे.",
                explanation: "रिअल कॉन्टेस्ट्स विजेत्यांना अशा प्रकारे संपर्क करत नाहीत - हा स्कॅम आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You tell a parent when someone online makes you uncomfortable.",
                explanation: "Always report uncomfortable online interactions to adults."
            },
            mr: {
                text: "जेव्हा कोणीतरी ऑनलाईन तुम्हाला अस्वस्थ करते तेव्हा तुम्ही पालकांना सांगता.",
                explanation: "अस्वस्थ करणाऱ्या ऑनलाईन इंटरॅक्शनबद्दल नेहमी प्रौढांना कळवा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "An app asks for access to your contacts and photos to function.",
                explanation: "Many apps ask for unnecessary permissions - be cautious."
            },
            mr: {
                text: "एक ॲप कार्य करण्यासाठी तुमच्या कॉन्टॅक्ट्स आणि फोटोजमध्ये प्रवेश मागते.",
                explanation: "बर्याच ॲप्स अनावश्यक परमिशन्स मागतात - सावधगिरी बाळगा."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You think before posting pictures or information online.",
                explanation: "Consider if you'd be comfortable with everyone seeing what you post."
            },
            mr: {
                text: "तुम्ही ऑनलाईन चित्रे किंवा माहिती पोस्ट करण्यापूर्वी विचार करता.",
                explanation: "तुम्ही पोस्ट केलेली माहिती प्रत्येकजण पाहील याबद्दल तुम्हाला आरामात वाटेल का याचा विचार करा."
            }
        }
    ],
    6: [
        {
            type: "TRAP",
            en: {
                text: "A website offers free Fortnite V-Bucks if you complete a survey.",
                explanation: "Free V-Bucks offers are always scams trying to steal information."
            },
            mr: {
                text: "एक वेबसाइट सर्व्हे पूर्ण केल्यास फ्री फोर्टनाइट V-बक्स ऑफर करते.",
                explanation: "फ्री V-बक्स ऑफर नेहमीच माहिती चोरण्याचे स्कॅम असतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You recognize a phishing email because it has spelling mistakes.",
                explanation: "Phishing attempts often contain errors - good spotting!"
            },
            mr: {
                text: "तुम्ही फिशिंग ईमेल ओळखता कारण त्यात स्पेलिंग चुका आहेत.",
                explanation: "फिशिंग प्रयत्नांमध्ये बर्याचदा त्रुटी असतात - चांगले ओळखलं!"
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A YouTube comment says 'Click here to get 1 million subscribers!'",
                explanation: "These are fake growth scams that may install malware."
            },
            mr: {
                text: "एक YouTube कमेंट म्हणतो '1 मिलियन सब्सक्रायबर्स मिळवण्यासाठी येथे क्लिक करा!'",
                explanation: "हे फेक ग्रोथ स्कॅम आहेत जे मालवेअर इंस्टॉल करू शकतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You verify a news story by checking other reliable sources.",
                explanation: "Cross-checking information helps avoid fake news."
            },
            mr: {
                text: "तुम्ही इतर विश्वासार्थ स्त्रोत तपासून बातमीची पडताळणी करता.",
                explanation: "माहितीची क्रॉस-चेकिंग केल्याने फेक न्यूज टाळता येते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A game mod website promises unlimited coins/gems if you download their file.",
                explanation: "Mod files often contain viruses that steal game accounts."
            },
            mr: {
                text: "एक गेम मॉड वेबसाइट प्रॉमिस करते अमर्यादित कॉइन्स/जेम्स जर तुम्ही त्यांची फाइल डाउनलोड केली.",
                explanation: "मॉड फाइल्समध्ये बर्याचदा व्हायरस असतात जे गेम अकाउंट्स चोरतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You use a nickname instead of your real name in online games.",
                explanation: "Pseudonyms protect your real identity online."
            },
            mr: {
                text: "तुम्ही ऑनलाईन गेम्समध्ये तुमच्या रिअल नेमऐवजी निकनेम वापरता.",
                explanation: "स्यूडोनिम्स तुमची रिअल ऑनलाईन ओळख संरक्षित करतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A 'friend' in-game pressures you to share your login details.",
                explanation: "Real friends never ask for your password - this is account theft."
            },
            mr: {
                text: "गेममधील एक 'फ्रेंड' तुम्हाला तुमची लॉगिन डिटेल्स शेअर करण्यास प्रेशर करतो.",
                explanation: "रिअल फ्रेंड्स कधीही तुमचा पासवर्ड मागत नाहीत - हे अकाउंट चोरी आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You check app reviews before downloading from new websites.",
                explanation: "Reviews help identify potentially dangerous apps."
            },
            mr: {
                text: "तुम्ही नवीन वेबसाइट्सवरून डाउनलोड करण्यापूर्वी ॲप रिव्ह्यू तपासता.",
                explanation: "रिव्ह्यू संभाव्य धोकादायक ॲप्स ओळखण्यास मदत करतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website says your browser is outdated and needs an immediate update.",
                explanation: "Real browser updates come through official channels only."
            },
            mr: {
                text: "एक वेबसाइट म्हणते तुमचा ब्राउझर ओल्ड आहे आणि लगेच अपडेट हवा.",
                explanation: "रिअल ब्राउझर अपडेट्स फक्त अधिकृत चॅनेल्सद्वारे येतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You tell a parent if someone online asks to meet in person.",
                explanation: "Always report when strangers want to meet - it could be dangerous."
            },
            mr: {
                text: "जर कोणी ऑनलाईन व्यक्तिशः भेटण्यास सांगितले तर तुम्ही पालकांना सांगता.",
                explanation: "अनोळखी लोक भेटू इच्छितात तेव्हा नेहमी कळवा - ते धोकादायक असू शकते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A message claims to be from 'Google Support' asking for your password.",
                explanation: "Real companies never ask for passwords via messages."
            },
            mr: {
                text: "एक मेसेज 'Google सपोर्ट'कडून आहे असे सांगून तुमचा पासवर्ड मागतो.",
                explanation: "रिअल कंपन्या मेसेजद्वारे कधीही पासवर्ड मागत नाहीत."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know not to jailbreak or root your device to get free apps.",
                explanation: "Modifying devices this way removes security protections."
            },
            mr: {
                text: "तुम्हाला माहित आहे फ्री ॲप्स मिळवण्यासाठी डिव्हाइस जेलब्रेक किंवा रूट करू नये.",
                explanation: "अशा प्रकारे डिव्हाइसेस मॉडिफाय केल्याने सिक्युरिटी प्रोटेक्शन काढून टाकते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A link promises to show 'who viewed your Instagram profile'.",
                explanation: "Instagram doesn't provide this feature - it's a data stealing scam."
            },
            mr: {
                text: "एक लिंक 'तुमच्या इन्स्टाग्राम प्रोफाइल कोणी पाहिले' हे दाखवण्याचे वचन देते.",
                explanation: "इन्स्टाग्राम हे फीचर देत नाही - हा डेटा चोरण्याचा स्कॅम आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know screenshots can be used as evidence of cyberbullying.",
                explanation: "Saving evidence helps stop online harassment."
            },
            mr: {
                text: "तुम्हाला माहित आहे स्क्रीनशॉट्स सायबरबुलिंगचे पुरावे म्हणून वापरले जाऊ शकतात.",
                explanation: "पुरावे सेव्ह केल्याने ऑनलाईन छळ थांबविण्यास मदत होते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website offers 'unlimited Robux' if you enter your Roblox password.",
                explanation: "Never enter passwords on third-party sites - it's account theft."
            },
            mr: {
                text: "एक वेबसाइट 'अमर्यादित रोबक्स' ऑफर करते जर तुम्ही तुमचा रोब्लॉक्स पासवर्ड टाकला.",
                explanation: "तृतीय-पक्ष साइट्सवर कधीही पासवर्ड टाकू नका - हे अकाउंट चोरी आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know WiFi hotspots in public places can be unsafe.",
                explanation: "Public WiFi may allow hackers to see your online activity."
            },
            mr: {
                text: "तुम्हाला माहित आहे पब्लिक प्लेसेसमधील WiFi हॉटस्पॉट्स असुरक्षित असू शकतात.",
                explanation: "पब्लिक WiFi हॅकर्सना तुमची ऑनलाईन ॲक्टिव्हिटी पाहू देऊ शकते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A message says your package delivery failed and asks for payment info.",
                explanation: "Delivery companies never ask for payments via random messages."
            },
            mr: {
                text: "एक मेसेज म्हणतो तुमची पॅकेज डिलिव्हरी फेल झाली आणि पेमेंट माहिती मागते.",
                explanation: "डिलिव्हरी कंपन्या रँडम मेसेजद्वारे कधीही पेमेंट्स मागत नाहीत."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know not to share exam papers or answer keys online.",
                explanation: "Sharing exam content is cheating and may have consequences."
            },
            mr: {
                text: "तुम्हाला माहित आहे परीक्षा पेपर्स किंवा आंसर कीज ऑनलाईन शेअर करू नये.",
                explanation: "परीक्षा कंटेंट शेअर करणे खोटे आहे आणि त्याचे परिणाम होऊ शकतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A Minecraft server offers 'admin powers' if you download their plugin.",
                explanation: "Third-party plugins often contain hidden malware."
            },
            mr: {
                text: "एक माइनक्राफ्ट सर्व्हर 'अॅडमिन पॉवर्स' ऑफर करते जर तुम्ही त्यांचा प्लगइन डाउनलोड केला.",
                explanation: "तृतीय-पक्ष प्लगइन्समध्ये बर्याचदा लपलेले मालवेअर असते."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know social media 'like and share' contests are often fake.",
                explanation: "Many such contests just collect user data for marketing."
            },
            mr: {
                text: "तुम्हाला माहित आहे सोशल मीडिया 'लाइक अँड शेअर' कॉन्टेस्ट्स बर्याचदा फेक असतात.",
                explanation: "असे बरेच कॉन्टेस्ट फक्त मार्केटिंगसाठी युजर डेटा गोळा करतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website asks you to disable antivirus to install their program.",
                explanation: "Legitimate programs never ask to disable security software."
            },
            mr: {
                text: "एक वेबसाइट तुम्हाला त्यांचा प्रोग्राम इंस्टॉल करण्यासाठी अँटीव्हायरस डिसेबल करण्यास सांगते.",
                explanation: "लीजिटिमेट प्रोग्राम्स कधीही सिक्युरिटी सॉफ्टवेअर डिसेबल करण्यास सांगत नाहीत."
            }
        }
    ],
    7: [
        {
            type: "TRAP",
            en: {
                text: "A 'tech support' caller says your computer has a virus and asks for remote access.",
                explanation: "Legitimate companies never call unsolicited - this is a scam to install malware."
            },
            mr: {
                text: "एक 'टेक सपोर्ट' कॉलर म्हणतो तुमच्या कॉम्प्युटरमध्ये व्हायरस आहे आणि रिमोट अॅक्सेस मागतो.",
                explanation: "लीजिटिमेट कंपन्या कधीही अनुरोध न करता कॉल करत नाहीत - हे मालवेअर इंस्टॉल करण्याचा स्कॅम आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You create passwords using memorable phrases with numbers and symbols.",
                explanation: "Passphrases with special characters are both secure and easier to remember."
            },
            mr: {
                text: "तुम्ही नंबर्स आणि सिम्बल्ससह मेमरेबल फ्रेजेस वापरून पासवर्ड्स तयार करता.",
                explanation: "स्पेशल कॅरॅक्टर्ससह पासफ्रेजेस सिक्युर आणि लक्षात ठेवण्यास सोप्या असतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A social media 'friend' sends a link saying 'Is this you in this video?'",
                explanation: "These links often lead to phishing sites or malware downloads."
            },
            mr: {
                text: "एक सोशल मीडिया 'फ्रेंड' 'या व्हिडिओमध्ये हे तुम्ही आहात का?' असे लिंक पाठवतो.",
                explanation: "अशा लिंक्स बर्याचदा फिशिंग साइट्स किंवा मालवेअर डाउनलोड्सकडे नेतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know screenshots of hurtful messages can be used as evidence.",
                explanation: "Documenting cyberbullying helps stop the harassment."
            },
            mr: {
                text: "तुम्हाला माहित आहे दुखावणाऱ्या मेसेजेसचे स्क्रीनशॉट्स पुरावा म्हणून वापरले जाऊ शकतात.",
                explanation: "सायबरबुलिंग डॉक्युमेंट केल्याने छळ थांबविण्यास मदत होते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "An app asks for permission to access your contacts and SMS messages.",
                explanation: "Most apps don't need this access - it's often for data harvesting."
            },
            mr: {
                text: "एक ॲप तुमच्या कॉन्टॅक्ट्स आणि SMS मेसेजेसमध्ये अॅक्सेसची परमिशन मागते.",
                explanation: "बहुतेक ॲप्सला या अॅक्सेसची गरज नसते - हे बर्याचदा डेटा हार्वेस्टिंगसाठी असते."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You log out of accounts when using shared computers at school.",
                explanation: "Prevents others from accessing your accounts accidentally."
            },
            mr: {
                text: "तुम्ही स्कूलमधील शेअर केलेल्या कॉम्प्युटर्सवर वापरल्यावर अकाउंट्समधून लॉग आउट करता.",
                explanation: "इतरांना चुकून तुमच्या अकाउंट्समध्ये प्रवेश मिळू नये यासाठी."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website offers free Netflix premium accounts if you complete offers.",
                explanation: "These are always scams that steal your information or install malware."
            },
            mr: {
                text: "एक वेबसाइट ऑफर पूर्ण केल्यास फ्री नेटफ्लिक्स प्रीमियम अकाउंट्स ऑफर करते.",
                explanation: "हे नेहमीच स्कॅम असतात जे तुमची माहिती चोरतात किंवा मालवेअर इंस्टॉल करतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know private browsing mode doesn't make you completely anonymous.",
                explanation: "Your school/ISP can still see your activity - only prevents local history."
            },
            mr: {
                text: "तुम्हाला माहित आहे प्रायव्हेट ब्राउझिंग मोड तुम्हाला पूर्णपणे अनामित करत नाही.",
                explanation: "तुमचे स्कूल/ISP तरीही तुमची ॲक्टिव्हिटी पाहू शकतात - फक्त लोकल हिस्टरी प्रिव्हेंट करते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A WhatsApp forward claims forwarding will give you special emojis.",
                explanation: "No app rewards message forwarding - these are chain message scams."
            },
            mr: {
                text: "एक WhatsApp फॉरवर्ड क्लेम करतो फॉरवर्ड केल्यास तुम्हाला स्पेशल इमोजी मिळतील.",
                explanation: "कोणताही ॲप मेसेज फॉरवर्डिंगला बक्षीस देत नाही - हे चेन मेसेज स्कॅम आहेत."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You verify unusual friend requests by asking mutual friends.",
                explanation: "Helps identify fake profiles trying to access your information."
            },
            mr: {
                text: "तुम्ही अनोळखी फ्रेंड रिक्वेस्ट्स म्युच्युअल फ्रेंड्सना विचारून पडताळता.",
                explanation: "तुमच्या माहितीत प्रवेश करण्याचा प्रयत्न करणाऱ्या फेक प्रोफाइल्स ओळखण्यास मदत होते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A game cheat website asks for your Google login to 'verify age'.",
                explanation: "This is credential stealing - never enter logins on third-party sites."
            },
            mr: {
                text: "एक गेम चीट वेबसाइट 'वय पडताळण्यासाठी' तुमचा Google लॉगिन मागते.",
                explanation: "हे क्रेडेन्शियल स्टीलिंग आहे - तृतीय-पक्ष साइट्सवर कधीही लॉगिन टाकू नका."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You check URL spellings before entering sensitive information.",
                explanation: "Phishing sites often use misspelled versions of real URLs."
            },
            mr: {
                text: "तुम्ही संवेदनशील माहिती टाकण्यापूर्वी URL स्पेलिंग तपासता.",
                explanation: "फिशिंग साइट्स बर्याचदा रिअल URL च्या चुकीच्या स्पेलिंग वापरतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A message claims you must update your payment details to keep using WhatsApp.",
                explanation: "Apps never ask for payment updates via message - this is phishing."
            },
            mr: {
                text: "एक मेसेज क्लेम करतो WhatsApp वापरत राहण्यासाठी तुम्ही तुमची पेमेंट डिटेल्स अपडेट केल्या पाहिजेत.",
                explanation: "ॲप्स मेसेजद्वारे कधीही पेमेंट अपडेट्स मागत नाहीत - हे फिशिंग आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know memes containing personal attacks can be cyberbullying.",
                explanation: "Harmful content shared online has real consequences."
            },
            mr: {
                text: "तुम्हाला माहित आहे पर्सनल अॅटॅक्स असलेले मीम्स सायबरबुलिंग असू शकतात.",
                explanation: "ऑनलाईन शेअर केलेल्या हानिकारक कंटेंटचे रिअल परिणाम असतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A software crack site offers paid programs for free download.",
                explanation: "Pirated software often contains hidden malware and is illegal."
            },
            mr: {
                text: "एक सॉफ्टवेअर क्रॅक साइट पेड प्रोग्राम्स फ्री डाउनलोडसाठी ऑफर करते.",
                explanation: "पायरेटेड सॉफ्टवेअरमध्ये बर्याचदा लपलेले मालवेअर असते आणि ते कायदेबाह्य आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You understand social media 'quizzes' may collect personal data.",
                explanation: "Many quizzes harvest information for targeted ads or identity theft."
            },
            mr: {
                text: "तुम्हाला समजते सोशल मीडिया 'क्विझेस' पर्सनल डेटा गोळा करू शकतात.",
                explanation: "बर्याच क्विझेस टार्गेटेड ads किंवा आयडेंटिटी थेफ्टसाठी माहिती गोळा करतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A PDF from an unknown sender asks you to 'enable editing' to view content.",
                explanation: "This is a common trick to bypass security and run malicious code."
            },
            mr: {
                text: "अनोळखी पाठवणाऱ्याकडून मिळालेला PDF कंटेंट पाहण्यासाठी 'एनेबल एडिटिंग' करण्यास सांगतो.",
                explanation: "सिक्युरिटी बायपास करण्यासाठी आणि मॅलिशियस कोड चालवण्यासाठी ही एक सामान्य युक्ती आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know location tagging can reveal your home address to strangers.",
                explanation: "Geotags in photos/posts create patterns showing where you live."
            },
            mr: {
                text: "तुम्हाला माहित आहे लोकेशन टॅगिंग तुमचा घरचा पत्ता अनोळखी लोकांना दाखवू शकते.",
                explanation: "फोटो/पोस्टमधील जिओटॅग्स तुम्ही कोठे राहता हे दाखवणारे नमुने तयार करतात."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A free VPN service asks you to disable antivirus during installation.",
                explanation: "Legitimate VPNs never ask this - likely installing malware."
            },
            mr: {
                text: "एक फ्री VPN सर्व्हिस इंस्टॉलेशन दरम्यान अँटीव्हायरस डिसेबल करण्यास सांगते.",
                explanation: "लीजिटिमेट VPN कधीही हे मागत नाहीत - कदाचित मालवेअर इंस्टॉल करत आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know deleting posts doesn't fully remove them from the internet.",
                explanation: "Others may have saved/shared the content before deletion."
            },
            mr: {
                text: "तुम्हाला माहित आहे पोस्ट्स डिलीट केल्याने ते इंटरनेटवरून पूर्णपणे काढून टाकले जात नाहीत.",
                explanation: "इतरांनी डिलीशनपूर्वी कंटेंट सेव्ह/शेअर केले असू शकते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A crypto mining site offers free games in exchange for your computer's processing power.",
                explanation: "These often overwork your device and may contain malware."
            },
            mr: {
                text: "एक क्रिप्टो मायनिंग साइट तुमच्या कॉम्प्युटरच्या प्रोसेसिंग पॉवरच्या बदल्यात फ्री गेम्स ऑफर करते.",
                explanation: "हे बर्याचदा तुमचे डिव्हाइस ओव्हरवर्क करतात आणि त्यात मालवेअर असू शकते."
            }
        }
    ],   
    8: [
        {
            type: "TRAP",
            en: {
                text: "A 'bank representative' calls asking for your OTP to 'verify your account'.",
                explanation: "Banks never ask for OTPs - this is a scam to bypass two-factor authentication."
            },
            mr: {
                text: "एक 'बँक प्रतिनिधी' तुमच्या अकाउंटची 'पडताळणी' करण्यासाठी तुमचा OTP मागतो.",
                explanation: "बँका कधीही OTPs मागत नाहीत - हे टू-फॅक्टर ऑथेंटिकेशन बायपास करण्याचा स्कॅम आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know public WiFi at cafes shouldn't be used for banking transactions.",
                explanation: "Public networks can be intercepted by hackers - use mobile data for sensitive tasks."
            },
            mr: {
                text: "तुम्हाला माहित आहे कॅफेमधील पब्लिक WiFi बँकिंग ट्रान्झाक्शन्ससाठी वापरू नये.",
                explanation: "पब्लिक नेटवर्क हॅकर्सद्वारे इंटरसेप्ट केले जाऊ शकतात - संवेदनशील कामांसाठी मोबाइल डेटा वापरा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A job offer email asks you to pay a 'registration fee' to get started.",
                explanation: "Legitimate jobs never ask for upfront payments - this is an advance-fee scam."
            },
            mr: {
                text: "एक जॉब ऑफर ईमेल सुरू करण्यासाठी 'रजिस्ट्रेशन फी' भरण्यास सांगते.",
                explanation: "लीजिटिमेट जॉब्स कधीही अग्रिम पेमेंट्स मागत नाहीत - हे अॅडव्हान्स-फी स्कॅम आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You understand that 'anonymous' browsing modes don't hide your activity from ISPs.",
                explanation: "VPNs/Tor provide more privacy but complete anonymity online is nearly impossible."
            },
            mr: {
                text: "तुम्हाला समजते की 'अनामित' ब्राउझिंग मोड तुमची ॲक्टिव्हिटी ISPs पासून लपवत नाही.",
                explanation: "VPNs/Tor जास्त प्रायव्हसी देतात पण ऑनलाईन पूर्ण अनामितता जवळजवळ अशक्य आहे."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A cryptocurrency investment promises 'guaranteed high returns' with no risk.",
                explanation: "All investments carry risk - 'guaranteed returns' are always scams."
            },
            mr: {
                text: "एक क्रिप्टोकरन्सी इन्व्हेस्टमेंट 'ग्यारंटीड हाय रिटर्न्स' नो रिस्कसह प्रॉमिस करते.",
                explanation: "सर्व इन्व्हेस्टमेंटमध्ये रिस्क असतो - 'ग्यारंटीड रिटर्न्स' नेहमी स्कॅम असतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know metadata in photos can reveal your location and device details.",
                explanation: "Always disable geotagging and scrub metadata before sharing photos."
            },
            mr: {
                text: "तुम्हाला माहित आहे फोटोमधील मेटाडेटा तुमचे लोकेशन आणि डिव्हाइस डिटेल्स दाखवू शकते.",
                explanation: "फोटो शेअर करण्यापूर्वी नेहमी जिओटॅगिंग डिसेबल करा आणि मेटाडेटा काढून टाका."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website offers '100% working' Instagram password hacking tools.",
                explanation: "These are always malware or phishing tools that steal your own credentials."
            },
            mr: {
                text: "एक वेबसाइट '100% वर्किंग' इन्स्टाग्राम पासवर्ड हॅकिंग टूल्स ऑफर करते.",
                explanation: "हे नेहमी मालवेअर किंवा फिशिंग टूल्स असतात जे तुमचे क्रेडेन्शियल्स चोरतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You recognize that AI deepfakes can impersonate people you know in videos.",
                explanation: "Verify unusual requests via another channel before taking action."
            },
            mr: {
                text: "तुम्हाला माहित आहे AI डीपफेक्स व्हिडिओमध्ये तुमच्या ओळखीच्या लोकांची नक्कल करू शकतात.",
                explanation: "कृती करण्यापूर्वी दुसर्या चॅनेलद्वारे अनोळखी विनंत्या पडताळा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "An 'unsubscribe' link in a spam email asks for your email password.",
                explanation: "Legitimate unsubscribe processes never require passwords."
            },
            mr: {
                text: "स्पॅम ईमेलमधील 'अनसब्स्क्राइब' लिंक तुमचा ईमेल पासवर्ड मागते.",
                explanation: "लीजिटिमेट अनसब्स्क्राइब प्रक्रियेस कधीही पासवर्ड्स आवश्यक करत नाहीत."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know factory reset doesn't completely erase all data from phones.",
                explanation: "Specialized tools can recover data - use encryption for sensitive devices."
            },
            mr: {
                text: "तुम्हाला माहित आहे फॅक्टरी रिसेट फोनमधील सर्व डेटा पूर्णपणे काढून टाकत नाही.",
                explanation: "स्पेशलाइज्ड टूल्स डेटा रिकव्हर करू शकतात - संवेदनशील डिव्हाइसेससाठी एन्क्रिप्शन वापरा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A 'system cleaner' app shows fake virus alerts unless you upgrade to premium.",
                explanation: "This is scareware - legitimate antivirus doesn't work this way."
            },
            mr: {
                text: "एक 'सिस्टीम क्लीनर' ॲप फेक व्हायरस अलर्ट्स दाखवते जोपर्यंत तुम्ही प्रीमियमवर अपग्रेड करत नाही.",
                explanation: "ही स्केअरवेअर आहे - लीजिटिमेट अँटीव्हायरस अशा प्रकारे काम करत नाही."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You understand social media 'login with Google/Facebook' shares your data with third parties.",
                explanation: "Review app permissions to limit what data is shared when using social logins."
            },
            mr: {
                text: "तुम्हाला समजते सोशल मीडिया 'लॉगिन विथ Google/Facebook' तुमचा डेटा तृतीय-पक्षांसोबत शेअर करते.",
                explanation: "सोशल लॉगिन वापरताना काय डेटा शेअर होतो आहे हे मर्यादित करण्यासाठी ॲप परमिशन्सची पुनरावृत्ती करा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A gaming Discord server offers cheats if you download their 'anti-ban' software.",
                explanation: "These programs are usually malware that steals gaming accounts."
            },
            mr: {
                text: "एक गेमिंग डिस्कॉर्ड सर्व्हर चीट्स ऑफर करते जर तुम्ही त्यांचे 'अँटी-बॅन' सॉफ्टवेअर डाउनलोड केले.",
                explanation: "हे प्रोग्राम बहुतेक वेळा मालवेअर असतात जे गेमिंग अकाउंट्स चोरतात."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know cookies can track your browsing activity across multiple websites.",
                explanation: "Regularly clearing cookies helps limit cross-site tracking."
            },
            mr: {
                text: "तुम्हाला माहित आहे कुकीज एकाधिक वेबसाइट्सवर तुमची ब्राउझिंग ॲक्टिव्हिटी ट्रॅक करू शकतात.",
                explanation: "कुकीज नियमितपणे क्लिअर केल्याने क्रॉस-साइट ट्रॅकिंग मर्यादित करण्यास मदत होते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A website claims your Android phone is infected and needs immediate cleaning.",
                explanation: "Android viruses don't work this way - this is scareware trying to install malware."
            },
            mr: {
                text: "एक वेबसाइट क्लेम करते तुमचा Android फोन इन्फेक्टेड आहे आणि लगेच क्लीनिंग हवे.",
                explanation: "Android व्हायरसेस अशा प्रकारे काम करत नाहीत - हे मालवेअर इंस्टॉल करण्याचा प्रयत्न करणारी स्केअरवेअर आहे."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You recognize that 'private' social media accounts can still be screenshotted/shared.",
                explanation: "Nothing online is truly private - only share what you're comfortable being public."
            },
            mr: {
                text: "तुम्हाला समजते की 'प्रायव्हेट' सोशल मीडिया अकाउंट्स अजूनही स्क्रीनशॉट/शेअर केले जाऊ शकतात.",
                explanation: "ऑनलाईन काहीही खरोखर खाजगी नसते - फक्त तेच शेअर करा जे तुम्हाला पब्लिक होण्यास आरामात वाटते."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A crypto 'cloud mining' service asks for upfront payment to start earning.",
                explanation: "Real mining doesn't work this way - these are Ponzi schemes."
            },
            mr: {
                text: "एक क्रिप्टो 'क्लाउड मायनिंग' सर्व्हिस कमाई सुरू करण्यासाठी अग्रिम पेमेंट मागते.",
                explanation: "रिअल मायनिंग अशा प्रकारे काम करत नाही - हे पोंझी स्कीम्स आहेत."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You understand that deleted social media posts may still exist in backups/archives.",
                explanation: "Assume anything posted online is permanent, even if deleted."
            },
            mr: {
                text: "तुम्हाला समजते की डिलीट केलेले सोशल मीडिया पोस्ट अजूनही बॅकअप्स/आर्काइव्हमध्ये अस्तित्वात असू शकतात.",
                explanation: "ऑनलाईन पोस्ट केलेली कोणतीही गोष्ट कायमस्वरूपी आहे असे गृहीत धरा, जरी ती डिलीट केली तरीही."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "An adult site asks for credit card details to 'verify age' for free access.",
                explanation: "This is a common scam - legitimate age verification doesn't work this way."
            },
            mr: {
                text: "एक ॲडल्ट साइट फ्री अॅक्सेससाठी 'वय पडताळणी' करण्यासाठी क्रेडिट कार्ड डिटेल्स मागते.",
                explanation: "हा एक सामान्य स्कॅम आहे - लीजिटिमेट वय पडताळणी अशा प्रकारे काम करत नाही."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You know biometric data (fingerprints/face scans) can be stolen like passwords.",
                explanation: "Biometrics are more secure but not foolproof - use multi-factor authentication."
            },
            mr: {
                text: "तुम्हाला माहित आहे बायोमेट्रिक डेटा (फिंगरप्रिंट्स/फेस स्कॅन्स) पासवर्ड्स प्रमाणे चोरला जाऊ शकतो.",
                explanation: "बायोमेट्रिक्स अधिक सुरक्षित आहेत पण फुलप्रूफ नाहीत - मल्टी-फॅक्टर ऑथेंटिकेशन वापरा."
            }
        },
        {
            type: "TRAP",
            en: {
                text: "A 'free' VPN service logs and sells your browsing history to advertisers.",
                explanation: "Most free VPNs monetize your data - paid services are more trustworthy."
            },
            mr: {
                text: "एक 'फ्री' VPN सर्व्हिस तुमची ब्राउझिंग हिस्टरी लॉग करते आणि अॅडव्हर्टायझर्सना विकते.",
                explanation: "बहुतेक फ्री VPNs तुमच्या डेटावर पैसे कमवतात - पेड सर्व्हिसेस अधिक विश्वासार्ह आहेत."
            }
        },
        {
            type: "TRUTH",
            en: {
                text: "You recognize that AI chatbots can generate convincing phishing messages.",
                explanation: "Be extra cautious with unsolicited messages, even if they seem professional."
            },
            mr: {
                text: "तुम्हाला समजते की AI चॅटबॉट्स कन्व्हिन्सिंग फिशिंग मेसेजेस जनरेट करू शकतात.",
                explanation: "अनुरोध न केलेल्या मेसेजेसबद्दल अतिरिक्त सावधगिरी बाळगा, जरी ते प्रोफेशनल वाटत असली तरीही."
            }
        }
    ],
};

// UI Text in English and Marathi
const uiText = {
    en: {
        score: "Score", 
        lives: "Lives", 
        highScore: "High Score", 
        trap: "TRAP", 
        truth: "TRUTH",
        welcomeTitle: "Cyber Safe Kids!",
        welcomeText: "Use head movements to answer: Nod ↑↓ for TRUTH, Shake ←→ for TRAP",
        loadingModels: "Loading AI...",
        letsGo: "Start Game!",
        webcamDeniedTitle: "Webcam Needed!",
        webcamDeniedText: "This game uses your head movements to play. Please enable webcam access.",
        webcamDeniedBtn: "Continue Without Webcam",
        retryWebcam: "Try Again",
        modelErrorTitle: "Error Loading AI",
        modelErrorText: "Couldn't load the face detection. Please check your internet connection and refresh the page.",
        modelErrorBtn: "Retry",
        correct: "Correct! 👍",
        incorrect: "Oops! 👎",
        nextQuestion: "Next Question",
        gameOver: "Game Over!",
        gameOverText: (s, hs) => `Your score: ${s}! High score: ${hs}.`,
        playAgain: "Play Again!",
        class: "Class",
        selectLanguage: "Select Language",
        selectClass: "Select Your Class"
    },
    mr: {
        score: "गुण", 
        lives: "जीवन", 
        highScore: "सर्वोच्च गुण", 
        trap: "सापळा", 
        truth: "सत्य",
        welcomeTitle: "सायबर सेफ किड्स!",
        welcomeText: "उत्तर देण्यासाठी डोके हलवा: सत्यासाठी डोके हलवा ↑↓, सापळ्यासाठी डोके डावीकडे उजवीकडे हलवा ←→",
        loadingModels: "AI लोड होत आहे...",
        letsGo: "गेम सुरू करा!",
        webcamDeniedTitle: "वेबकॅम आवश्यक!",
        webcamDeniedText: "हे गेम खेळण्यासाठी तुमच्या डोक्याच्या हालचाली वापरते. कृपया वेबकॅम प्रवेश सक्षम करा.",
        webcamDeniedBtn: "वेबकॅमशिवाय सुरू ठेवा",
        retryWebcam: "पुन्हा प्रयत्न करा",
        modelErrorTitle: "AI लोड करताना त्रुटी",
        modelErrorText: "चेहरा ओळख प्रणाली लोड करता आली नाही. कृपया तुमचे इंटरनेट कनेक्शन तपासा आणि पृष्ठ रीफ्रेश करा.",
        modelErrorBtn: "पुन्हा प्रयत्न करा",
        correct: "बरोबर! 👍",
        incorrect: "अरेरे! 👎",
        nextQuestion: "पुढील प्रश्न",
        gameOver: "गेम संपला!",
        gameOverText: (s, hs) => `तुमचे गुण: ${s}! सर्वोच्च गुण: ${hs}.`,
        playAgain: "पुन्हा खेळा!",
        class: "इयत्ता",
        selectLanguage: "भाषा निवडा",
        selectClass: "तुमची इयत्ता निवडा"
    }
};

// DOM Elements
const video = document.getElementById('video');
const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');
const highScoreEl = document.getElementById('high-score-value');
const scenarioTextEl = document.getElementById('scenario-text');
const scenarioCard = document.getElementById('scenario-card');
const resultIcon = document.getElementById('result-icon');
const gameModal = document.getElementById('game-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalButton = document.getElementById('modal-button');
const retryWebcamBtn = document.getElementById('retry-webcam');
const languageModal = document.getElementById('language-modal');
const classModal = document.getElementById('class-modal');
const languageBtn = document.getElementById('language-btn');
const classBtn = document.getElementById('class-btn');
const muteBtn = document.getElementById('mute-btn');
const classModalTitle = document.getElementById('class-modal-title');

// Game State
let score = 0;
let lives = 3;
let currentScenarioIndex = -1;
let gameActive = false;
let answerMade = false;
let highScore = 0;
let scenarios = [];
let currentLanguage = 'en';
let selectedClass = '5';
let isMuted = false;
let speechSynthesis = window.speechSynthesis;
let faceDetectionActive = false;
let detectionInterval;
let lastNodTime = 0;
let lastShakeTime = 0;
const cooldown = 1000; // 1 second cooldown

// Initialize the game
function init() {
    setupSounds();
    loadHighScore();
    setupEventListeners();
    showLanguageModal();
    updateUIText();
}

// Set up sound effects
function setupSounds() {
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
    
    correctSound = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.2 }
    }).toDestination();
    
    incorrectSound = new Tone.Synth({
        oscillator: { type: 'square' },
        envelope: { attack: 0.01, decay: 0.4, sustain: 0, release: 0.2 }
    }).toDestination();
}

// Load high score from localStorage
function loadHighScore() {
    highScore = localStorage.getItem('cyberSafeHighScore') || 0;
    highScoreEl.innerText = highScore;
}

// Save high score to localStorage
function saveHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('cyberSafeHighScore', highScore);
        highScoreEl.innerText = highScore;
    }
}

// Set up event listeners
function setupEventListeners() {
    document.querySelectorAll('[data-language]').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLanguage = btn.dataset.language;
            languageBtn.textContent = currentLanguage === 'mr' ? 'मराठी' : 'English';
            languageModal.classList.add('d-none');
            showClassModal();
        });
    });
    
    document.querySelectorAll('[data-class]').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedClass = btn.dataset.class;
            classBtn.textContent = `${uiText[currentLanguage].class}: ${selectedClass}`;
            classModal.classList.add('d-none');
            startGameSetup();
        });
    });
    
    muteBtn.addEventListener('click', toggleMute);
    languageBtn.addEventListener('click', () => !gameActive && showLanguageModal());
    classBtn.addEventListener('click', () => !gameActive && showClassModal());
    retryWebcamBtn.addEventListener('click', startGameSetup);
}

// Show language selection modal
function showLanguageModal() {
    languageModal.classList.remove('d-none');
    classModal.classList.add('d-none');
}

// Show class selection modal
function showClassModal() {
    classModalTitle.textContent = uiText[currentLanguage].selectClass;
    classModal.classList.remove('d-none');
    languageModal.classList.add('d-none');
}

// Update UI text
function updateUIText() {
    const t = uiText[currentLanguage];
    document.getElementById('score-label').textContent = t.score;
    document.getElementById('lives-label').textContent = t.lives;
    document.getElementById('highscore-label').textContent = t.highScore;
    document.getElementById('truth-label').textContent = t.truth;
    document.getElementById('trap-label').textContent = t.trap;
    classBtn.textContent = `${t.class}: ${selectedClass}`;
    languageBtn.textContent = currentLanguage === 'mr' ? 'मराठी' : 'English';
    muteBtn.textContent = isMuted ? '🔇' : '🔊';
}

// Toggle mute state
function toggleMute() {
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? '🔇' : '🔊';
}

// Start game setup
function startGameSetup() {
    gameModal.classList.remove('d-none');
    modalTitle.textContent = uiText[currentLanguage].welcomeTitle;
    modalText.textContent = uiText[currentLanguage].welcomeText;
    modalButton.textContent = uiText[currentLanguage].letsGo;
    retryWebcamBtn.classList.add('d-none');
    
    modalButton.onclick = async () => {
        try {
            await setupCamera();
            await loadModels();
            startGame();
        } catch (error) {
            handleSetupError(error);
        }
    };
}

// Handle setup errors
function handleSetupError(error) {
    const t = uiText[currentLanguage];
    
    if (error.name === 'NotAllowedError') {
        modalTitle.textContent = t.webcamDeniedTitle;
        modalText.textContent = t.webcamDeniedText;
        modalButton.textContent = t.webcamDeniedBtn;
        retryWebcamBtn.classList.remove('d-none');
        retryWebcamBtn.textContent = t.retryWebcam;
    } else {
        modalTitle.textContent = t.modelErrorTitle;
        modalText.textContent = t.modelErrorText;
        modalButton.textContent = t.modelErrorBtn;
    }
    
    modalButton.onclick = () => {
        gameModal.classList.add('d-none');
        startGame();
    };
}

// Set up camera
async function setupCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: {
                facingMode: 'user',
                width: { ideal: 640 },
                height: { ideal: 480 }
            } 
        });
        
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }
        
        video.srcObject = stream;
        
        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                video.play();
                resolve(video);
            };
        });
    } catch (err) {
        console.error("Webcam error:", err);
        throw err;
    }
}

// Load face detection models
async function loadModels() {
    try {
        const MODEL_URL = 'https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights';
        
        modalButton.disabled = true;
        modalButton.textContent = uiText[currentLanguage].loadingModels;
        
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL)
        ]);
        
        modalButton.disabled = false;
        modalButton.textContent = uiText[currentLanguage].letsGo;
    } catch (error) {
        console.error("Model error:", error);
        throw error;
    }
}

// Start the game
function startGame() {
    if (detectionInterval) clearInterval(detectionInterval);
    
    score = 0;
    lives = 3;
    answerMade = false;
    scenarios = [...gameData[selectedClass]];
    shuffleArray(scenarios);
    currentScenarioIndex = -1;
    updateHUD();
    gameModal.classList.add('d-none');
    gameActive = true;
    faceDetectionActive = true;
    loadNextScenario();
    startHeadTracking();
}

// Shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Load next scenario
function loadNextScenario() {
    answerMade = false;
    scenarioCard.className = '';
    resultIcon.innerText = '';
    currentScenarioIndex++;
    
    if (currentScenarioIndex >= scenarios.length || lives <= 0) {
        endGame();
        return;
    }
    
    const scenario = scenarios[currentScenarioIndex][currentLanguage];
    scenarioTextEl.textContent = scenario.text;
    
    if (!isMuted && speechSynthesis) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(scenario.text);
        utterance.lang = currentLanguage === 'mr' ? 'hi-IN' : 'en-US';
        speechSynthesis.speak(utterance);
    }
}

// Check user answer
function checkAnswer(userAnswer) {
    if (!gameActive || answerMade) return;
    answerMade = true;
    faceDetectionActive = false;
    
    const current = scenarios[currentScenarioIndex];
    const t = uiText[currentLanguage];
    
    if (userAnswer === current.type) {
        score++;
        scenarioCard.classList.add('correct');
        resultIcon.innerText = '✅';
        modalTitle.textContent = t.correct;
        if (!isMuted) correctSound.triggerAttackRelease("C5", "8n");
    } else {
        lives--;
        scenarioCard.classList.add('incorrect');
        resultIcon.innerText = '❌';
        modalTitle.textContent = t.incorrect;
        if (!isMuted) incorrectSound.triggerAttackRelease("C3", "8n");
    }
    
    updateHUD();
    modalText.textContent = current[currentLanguage].explanation;
    modalButton.textContent = t.nextQuestion;
    gameModal.classList.remove('d-none');
    retryWebcamBtn.classList.add('d-none');
    
    modalButton.onclick = () => {
        gameModal.classList.add('d-none');
        faceDetectionActive = true;
        loadNextScenario();
    };
}

// Update HUD
function updateHUD() {
    scoreEl.textContent = score;
    livesEl.innerHTML = '❤️'.repeat(lives);
}

// End the game
function endGame() {
    gameActive = false;
    faceDetectionActive = false;
    clearInterval(detectionInterval);
    saveHighScore();
    
    const t = uiText[currentLanguage];
    modalTitle.textContent = t.gameOver;
    modalText.textContent = t.gameOverText(score, highScore);
    modalButton.textContent = t.playAgain;
    modalButton.onclick = startGame;
    gameModal.classList.remove('d-none');
}

// Start head tracking
function startHeadTracking() {
    let lastNosePosition = null;
    let verticalMovement = 0;
    let horizontalMovement = 0;
    const threshold = 15;
    
    detectionInterval = setInterval(async () => {
        if (!faceDetectionActive || !gameActive || answerMade || !video.srcObject) return;
        
        try {
            const detections = await faceapi.detectSingleFace(
                video, 
                new faceapi.TinyFaceDetectorOptions({ 
                    inputSize: 320, 
                    scoreThreshold: 0.5 
                })
            ).withFaceLandmarks();
            
            if (detections) {
                const nose = detections.landmarks.getNose();
                const noseTip = nose[3];
                
                if (lastNosePosition) {
                    const dx = noseTip.x - lastNosePosition.x;
                    const dy = noseTip.y - lastNosePosition.y;
                    
                    // Detect nodding (up-down for TRUTH)
                    if (Math.abs(dy) > threshold && Math.abs(dy) > Math.abs(dx)) {
                        verticalMovement += Math.abs(dy);
                        if (verticalMovement > threshold * 3) {
                            verticalMovement = 0;
                            const now = Date.now();
                            if (now - lastNodTime > cooldown) {
                                lastNodTime = now;
                                checkAnswer('TRUTH');
                            }
                        }
                    } 
                    // Detect shaking (left-right for TRAP)
                    else if (Math.abs(dx) > threshold) {
                        horizontalMovement += Math.abs(dx);
                        if (horizontalMovement > threshold * 3) {
                            horizontalMovement = 0;
                            const now = Date.now();
                            if (now - lastShakeTime > cooldown) {
                                lastShakeTime = now;
                                checkAnswer('TRAP');
                            }
                        }
                    }
                }
                
                lastNosePosition = { x: noseTip.x, y: noseTip.y };
            } else {
                lastNosePosition = null;
                verticalMovement = 0;
                horizontalMovement = 0;
            }
        } catch (error) {
            console.error("Detection error:", error);
        }
    }, 100);
}

// Initialize the game
window.addEventListener('DOMContentLoaded', init);

// Clean up
window.addEventListener('beforeunload', () => {
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
    clearInterval(detectionInterval);
});