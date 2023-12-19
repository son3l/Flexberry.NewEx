﻿




CREATE TABLE NoNOptFile (
 primaryKey UUID NOT NULL,
 Date TIMESTAMP(3) NULL,
 Exe VARCHAR(4) NULL,
 Name VARCHAR(255) NULL,
 Repository VARCHAR(255) NULL,
 Size INT NULL,
 NoNOptFile UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE DownloadFile (
 primaryKey UUID NOT NULL,
 PathToLoad VARCHAR(255) NULL,
 Optimize UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Optimize (
 primaryKey UUID NOT NULL,
 lvlCompress INT NULL,
 method VARCHAR(8) NULL,
 UploadFile UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UploadFile (
 primaryKey UUID NOT NULL,
 PathToFile VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE OptFiles (
 primaryKey UUID NOT NULL,
 Repository VARCHAR(255) NULL,
 DownloadFile UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE NoNOptFile ADD CONSTRAINT FK2797bd65efc4c0e4dd53dd022e3a4bafaf174cbe FOREIGN KEY (NoNOptFile) REFERENCES UploadFile; 
CREATE INDEX Index2797bd65efc4c0e4dd53dd022e3a4bafaf174cbe on NoNOptFile (NoNOptFile); 

 ALTER TABLE DownloadFile ADD CONSTRAINT FKd13fb27d5b647f6b5f2424c2d9100e9f7b008231 FOREIGN KEY (Optimize) REFERENCES Optimize; 
CREATE INDEX Indexd13fb27d5b647f6b5f2424c2d9100e9f7b008231 on DownloadFile (Optimize); 

 ALTER TABLE Optimize ADD CONSTRAINT FK13f87a899cb008a953d5297831a959ddbab653a5 FOREIGN KEY (UploadFile) REFERENCES UploadFile; 
CREATE INDEX Index13f87a899cb008a953d5297831a959ddbab653a5 on Optimize (UploadFile); 

 ALTER TABLE OptFiles ADD CONSTRAINT FK5c4365def301dd38419904fdbc3874c152c7bfd7 FOREIGN KEY (DownloadFile) REFERENCES DownloadFile; 
CREATE INDEX Index5c4365def301dd38419904fdbc3874c152c7bfd7 on OptFiles (DownloadFile); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

