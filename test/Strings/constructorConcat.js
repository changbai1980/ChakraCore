//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function f()
{
    var constructor = Int8Array;
    var i = 0;
    while (i < 5) {
        i++;
        constructor += "this_should_not_stay";
    }
}
f();
f();

if(!Int8Array.toString().includes("this_should_not_stay"))
{
    WScript.Echo("pass");
}
