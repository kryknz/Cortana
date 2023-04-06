const { cmd,tlang,prefix} = require('../lib/');
cmd({
            pattern: "switch",
            desc: "Switches for various works.",
            category: "extra",
            filename: __filename
        },
        async(Void, citel, text) => {
           let list = [{
title: 'Activate antilink',
rowId: `${prefix}act antilink`,
description: 'Activates antilink to kick link senders.'
},
{
title: 'Deactivate antilink',
rowId: `${prefix}deact antilink`,
description: 'Deactivates antilink'
},{
title: 'Activate Commands in pm.',
rowId: `${prefix}setvar DISABLE_PM:true`,
description: 'No one would be able to use cmds except owner.'
},
{
title: 'Deactivate Commands in pm.',
rowId: `${prefix}setvar DISABLE_PM:false`,
description: 'Everyone can use cmd in pm.'
},
{
title: 'Activate Economy',
rowId: `${prefix}act economy`,
description: 'Activates Economy features in Group.'
},
{
title: 'Deactivate Economy',
rowId: `${prefix}deact economy`,
description: 'Deactivates Economy features in Group.'
},
{
title: 'Activate Events',
rowId: `${prefix}act events`,
description: 'Activates Welcome and Goodbye in Group.'
},
{
title: 'Deactivate Events',
rowId: `${prefix}deact economy`,
description: 'Deactivates Welcome and Goodbye in Group.'
},
{
title: 'Activate NSFW',
rowId: `${prefix}act events`,
description: 'Activates Not safe for work features in Group.'
},
{
title: 'Deactivate Events',
rowId: `${prefix}deact economy`,
description: 'Deactivates not safe for work features in Group.'
},{
title: 'Act/Deact Chatbot',
rowId: `${prefix}chatbot`,
description: 'Activate or deactivate chatbot.'
},{
title: 'Act/Deact Bot',
rowId: `${prefix}bot`,
description: 'Activate or deactivate bot in Group.'
}
            ]
            ted = `Some Switches for bot commands._`
            const sections = [

                {
                    title: "Switch Side.",
                    rows: list
                }

            ]
            const listMessage = {
                text: ted,
                footer: tlang().footer,
                title: ``,
                buttonText: "OPTIONS",
                mentions: await Void.parseMention(ted),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })
        }
    )